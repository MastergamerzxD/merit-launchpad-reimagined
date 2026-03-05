import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, Save, Send } from "lucide-react";

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

interface BlogFormProps {
  initialData?: {
    id?: string;
    title: string;
    slug: string;
    content: string;
    featured_image: string | null;
    author: string;
    category: string;
    tags: string[] | null;
    meta_description: string | null;
    status: string;
  };
  onSaved?: () => void;
}

export default function CreateBlog({ initialData, onSaved }: BlogFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [featuredImage, setFeaturedImage] = useState(initialData?.featured_image || "");
  const [author, setAuthor] = useState(initialData?.author || "Merit Launchers");
  const [category, setCategory] = useState(initialData?.category || "General");
  const [tags, setTags] = useState(initialData?.tags?.join(", ") || "");
  const [metaDescription, setMetaDescription] = useState(initialData?.meta_description || "");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!initialData) setSlug(slugify(value));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const { error } = await supabase.storage.from("blog-images").upload(fileName, file);
    if (error) {
      toast({ title: "Upload failed", description: error.message, variant: "destructive" });
    } else {
      const { data } = supabase.storage.from("blog-images").getPublicUrl(fileName);
      setFeaturedImage(data.publicUrl);
    }
    setUploading(false);
  };

  const handleSave = async (status: "draft" | "published") => {
    if (!title.trim() || !slug.trim()) {
      toast({ title: "Title is required", variant: "destructive" });
      return;
    }
    setSaving(true);
    const blogData = {
      title: title.trim(),
      slug: slug.trim(),
      content,
      featured_image: featuredImage || null,
      author,
      category,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      meta_description: metaDescription || null,
      status,
      publish_date: status === "published" ? new Date().toISOString() : null,
    };

    let error;
    if (initialData?.id) {
      ({ error } = await supabase.from("blogs").update(blogData).eq("id", initialData.id));
    } else {
      ({ error } = await supabase.from("blogs").insert(blogData));
    }

    setSaving(false);
    if (error) {
      toast({ title: "Error saving blog", description: error.message, variant: "destructive" });
    } else {
      toast({ title: status === "published" ? "Blog published!" : "Draft saved!" });
      if (onSaved) onSaved();
      else navigate("/admin/manage");
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{initialData ? "Edit Blog" : "Create New Blog"}</h1>
      <div className="space-y-6">
        <Card>
          <CardHeader><CardTitle className="text-base">Blog Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Blog title" />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="blog-url-slug" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Author</Label>
                <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Education, Tips" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Tags (comma separated)</Label>
              <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="CUET, exam tips, preparation" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Featured Image</CardTitle></CardHeader>
          <CardContent>
            {featuredImage && (
              <img src={featuredImage} alt="Preview" className="w-full max-h-64 object-cover rounded-lg mb-4" />
            )}
            <Label htmlFor="image-upload" className="flex items-center gap-2 cursor-pointer border-2 border-dashed rounded-lg p-6 justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              <Upload className="h-5 w-5" />
              {uploading ? "Uploading..." : "Click to upload image"}
            </Label>
            <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Content</CardTitle></CardHeader>
          <CardContent>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here... (Supports HTML)"
              className="min-h-[300px] font-mono text-sm"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">SEO</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label>Meta Description</Label>
              <Textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Brief description for search engines (max 160 chars)" maxLength={160} className="min-h-[80px]" />
              <p className="text-xs text-muted-foreground">{metaDescription.length}/160</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" onClick={() => handleSave("draft")} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button onClick={() => handleSave("published")} disabled={saving}>
            <Send className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
