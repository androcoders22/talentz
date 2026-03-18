"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { blogApi } from "@/lib/api/blogs";
import { CreateBlogDrawer } from "@/components/dashboard/blogs/CreateBlogDrawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { IconSearch, IconTrash } from "@tabler/icons-react";

export default function BlogsDashboardPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const data = await blogApi.getAll();
      setBlogs(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await blogApi.delete(id);
      setBlogs(blogs.filter((b) => b._id !== id));
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog");
    }
  };

  const toggleIsActive = async (blog: any) => {
    try {
      const updatedStatus = !blog.isActive;
      // Optimistic update
      setBlogs(
        blogs.map((b) =>
          b._id === blog._id ? { ...b, isActive: updatedStatus } : b,
        ),
      );

      await blogApi.update(blog._id, { ...blog, isActive: updatedStatus });

      toast.success(
        `Blog ${updatedStatus ? "published" : "archived"} successfully`,
      );
    } catch (error) {
      console.error(error);
      // Revert on failure
      setBlogs(
        blogs.map((b) =>
          b._id === blog._id ? { ...b, isActive: blog.isActive } : b,
        ),
      );
      toast.error("Failed to update status");
    }
  };

  const filteredBlogs = blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = blog.title?.toLowerCase().includes(query);
    const subtitleMatch = blog.subTitle?.toLowerCase().includes(query);
    const contentMatch = blog.content?.toLowerCase().includes(query);
    return titleMatch || subtitleMatch || contentMatch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Blogs</h2>
          <p className="text-muted-foreground">Manage your blog posts here.</p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <IconSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search blogs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <CreateBlogDrawer onSuccess={fetchBlogs} />
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <p className="text-muted-foreground animate-pulse">
            Loading blogs...
          </p>
        </div>
      ) : blogs.length === 0 && !searchQuery ? (
        <div className="text-center py-10 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">
            No blogs found. Create your first blog post!
          </p>
        </div>
      ) : (
        <div className="border rounded-md overflow-x-auto bg-card">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground bg-muted/50 border-b">
              <tr>
                <th className="px-4 py-3 font-medium w-30">Cover Image</th>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium w-32">Date</th>
                <th className="px-4 py-3 font-medium w-24">Active</th>
                <th className="px-4 py-3 font-medium text-right w-32">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-muted-foreground"
                  >
                    No blogs found matching your search.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr
                    key={blog._id}
                    className="border-b last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">
                      {blog.coverImage ? (
                        <div className="relative h-10 w-16 rounded overflow-hidden bg-muted">
                          <Image
                            src={blog.coverImage}
                            alt={blog.title || "Blog cover"}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      ) : (
                        <div className="h-10 w-16 rounded bg-muted flex items-center justify-center text-[10px] text-muted-foreground">
                          No Img
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-foreground line-clamp-1">
                        {blog.title}
                      </div>
                      {blog.subTitle && (
                        <div className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                          {blog.subTitle}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">
                      <Switch
                        checked={blog.isActive}
                        onCheckedChange={() => toggleIsActive(blog)}
                        aria-label="Toggle active status"
                        className="rounded-xs [&_span]:rounded-xs"
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex justify-end gap-2 items-center">
                        <CreateBlogDrawer onSuccess={fetchBlogs} blog={blog} />
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteBlog(blog._id)}
                          title="Delete"
                          className="px-2"
                        >
                          <IconTrash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
