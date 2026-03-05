import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pencil, Trash2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import type { Tables } from "@/integrations/supabase/types";

export default function ManageBlogs() {
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);
  const [editBlog, setEditBlog] = useState<Tables<"blogs"> | null>(null);
  const { toast } = useToast();

  const fetchBlogs = async () => {
    const { data } = await supabase.from("blogs").select("*").order("created_at", { ascending: false });
    setBlogs(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Blog deleted" });
      fetchBlogs();
    }
  };

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Manage Blogs</h1>
        <Button asChild><Link to="/admin/create">+ New Blog</Link></Button>
      </div>

      <Card>
        <CardContent className="p-0">
          {blogs.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">No blogs yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden sm:table-cell">Category</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blogs.map((blog) => (
                    <TableRow key={blog.id}>
                      <TableCell className="font-medium max-w-[200px] truncate">{blog.title}</TableCell>
                      <TableCell className="hidden sm:table-cell">{blog.category}</TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                        {blog.publish_date ? new Date(blog.publish_date).toLocaleDateString() : "—"}
                      </TableCell>
                      <TableCell>{blog.views}</TableCell>
                      <TableCell>
                        <span className={`text-xs px-2 py-1 rounded-full ${blog.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {blog.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Dialog open={editBlog?.id === blog.id} onOpenChange={(open) => !open && setEditBlog(null)}>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => setEditBlog(blog)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                              <CreateBlog
                                initialData={blog}
                                onSaved={() => { setEditBlog(null); fetchBlogs(); }}
                              />
                            </DialogContent>
                          </Dialog>
                          <Button variant="ghost" size="icon" asChild>
                            <Link to={`/blog/${blog.slug}`} target="_blank">
                              <ExternalLink className="h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id)} className="text-destructive hover:text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
