import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Eye, TrendingUp, Award } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

export default function BlogAnalytics() {
  const [blogs, setBlogs] = useState<Tables<"blogs">[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("blogs").select("*").order("views", { ascending: false }).then(({ data }) => {
      setBlogs(data || []);
      setLoading(false);
    });
  }, []);

  const totalViews = blogs.reduce((sum, b) => sum + b.views, 0);
  const topBlog = blogs[0];
  const chartData = blogs.slice(0, 10).map((b) => ({ name: b.title.length > 20 ? b.title.slice(0, 20) + "…" : b.title, views: b.views }));

  if (loading) {
    return <div className="p-8 flex justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /></div>;
  }

  return (
    <div className="p-6 md:p-8 space-y-6">
      <h1 className="text-2xl font-bold">Blog Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-3xl font-bold">{totalViews}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Views/Blog</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent><div className="text-3xl font-bold">{blogs.length ? Math.round(totalViews / blogs.length) : 0}</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Most Popular</CardTitle>
            <Award className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold truncate">{topBlog?.title || "—"}</div>
            <p className="text-xs text-muted-foreground">{topBlog?.views || 0} views</p>
          </CardContent>
        </Card>
      </div>

      {chartData.length > 0 && (
        <Card>
          <CardHeader><CardTitle className="text-lg">Top Blog Posts by Views</CardTitle></CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="hsl(190, 85%, 50%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader><CardTitle className="text-lg">All Blogs by Views</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-3">
            {blogs.map((blog, i) => (
              <div key={blog.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-muted-foreground w-6">#{i + 1}</span>
                  <div>
                    <p className="font-medium text-sm">{blog.title}</p>
                    <p className="text-xs text-muted-foreground">{blog.category}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold">{blog.views} views</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
