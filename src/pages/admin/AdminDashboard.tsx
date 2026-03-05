import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Tables } from "@/integrations/supabase/types";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("blogs").select("*").order("created_at", { ascending: false }).then(({ data }) => {
      setBlogs(data || []);
      setLoading(false);
    });
  }, []);

  const totalViews = blogs.reduce((sum, b) => sum + b.views, 0);
  const publishedCount = blogs.filter((b) => b.status === "published").length;
  const recentBlogs = blogs.slice(0, 5);

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>;
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-3xl font-bold">{blogs.length}</div><p className="text-xs text-muted-foreground">{publishedCount} published</p></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-3xl font-bold">{totalViews}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Drafts</CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent><div className="text-3xl font-bold">{blogs.length - publishedCount}</div></CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-lg">Recent Blog Posts</CardTitle></CardHeader>
        <CardContent>
          {recentBlogs.length === 0 ? (
            <p className="text-muted-foreground text-sm">No blogs yet. <Link to="/admin/create" className="text-primary underline">Create your first blog</Link></p>
          ) : (
            <div className="space-y-3">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <p className="font-medium text-sm">{blog.title}</p>
                    <p className="text-xs text-muted-foreground">{blog.category} · {blog.views} views</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${blog.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {blog.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
