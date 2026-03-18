"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { blogApi } from "@/lib/api/blogs";
import { s3Api } from "@/lib/api/s3";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  IconPlus,
  IconArchive,
  IconCheck,
  IconEdit,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const BlogEditor = dynamic(() => import("./BlogEditor"), {
  ssr: false,
  loading: () => (
    <div className="min-h-100 flex items-center justify-center border rounded-md bg-muted animate-pulse">
      Loading editor...
    </div>
  ),
});

const formSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  subtitle: z
    .string()
    .max(500, "Sub-title must be less than 500 characters")
    .optional(),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().optional(),
  isActive: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export function CreateBlogDrawer({
  onSuccess,
  blog,
}: {
  onSuccess?: () => void;
  blog?: any;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title || "",
      subtitle: blog?.subTitle || "",
      content: blog?.content || "",
      coverImage: blog?.coverImage || "",
      isActive: blog?.isActive ?? true,
    },
  });

  const watchTitle = watch("title");
  const watchSubtitle = watch("subtitle");
  const watchContent = watch("content");
  const watchCoverImage = watch("coverImage");
  const watchIsActive = watch("isActive");

  // Auto-resize textareas
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.height = "auto";
      titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }
  }, [watchTitle]);

  useEffect(() => {
    if (subtitleRef.current) {
      subtitleRef.current.style.height = "auto";
      subtitleRef.current.style.height = `${subtitleRef.current.scrollHeight}px`;
    }
  }, [watchSubtitle]);

  // Reset form when drawer opens/closes
  useEffect(() => {
    if (!open) {
      reset({
        title: blog?.title || "",
        subtitle: blog?.subTitle || "",
        content: blog?.content || "",
        coverImage: blog?.coverImage || "",
        isActive: blog?.isActive ?? true,
      });
    }
  }, [open, reset, blog]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const data = await s3Api.uploadImage(formData);
      setValue("coverImage", data.url, { shouldValidate: true });
      toast.success("Image uploaded successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      const payload = {
        name: data.title, // sending title as name since name is required by the backend
        coverImage: data.coverImage,
        title: data.title,
        subTitle: data.subtitle,
        content: data.content,
        isActive: data.isActive,
      };

      if (blog) {
        await blogApi.update(blog._id, payload);
      } else {
        await blogApi.create(payload);
      }

      setOpen(false);
      toast.success(
        blog
          ? "Blog post updated successfully"
          : "Blog post created successfully",
      );

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer direction="bottom" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {blog ? (
          <Button variant="outline" size="sm" className="gap-2">
            <IconEdit className="h-4 w-4" />
            Edit
          </Button>
        ) : (
          <Button className="gap-2">
            <IconPlus className="h-4 w-4" />
            New Blog Post
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="!mt-0 !h-[100dvh] !max-h-screen !rounded-none">
        <DrawerTitle className="sr-only">
          {blog ? "Edit Blog Post" : "Create New Blog Post"}
        </DrawerTitle>
        <div className="no-scrollbar overflow-y-auto px-4 flex-1 w-full flex flex-col">
          <div className="flex flex-col gap-3 flex-1 w-full">
            <div className="flex flex-col shrink-0">
              <Textarea
                {...register("title")}
                ref={(e) => {
                  register("title").ref(e);
                  // @ts-ignore
                  titleRef.current = e;
                }}
                placeholder="Blog Title"
                rows={1}
                className={`text-4xl md:text-5xl lg:text-5xl font-bold px-0 h-auto !min-h-0 border-none shadow-none focus-visible:ring-0 resize-none overflow-hidden py-2 ${errors.title ? "placeholder:text-destructive" : ""}`}
              />
              {errors.title && (
                <p className="text-sm text-destructive font-medium px-2">
                  {errors.title.message}
                </p>
              )}

              <Textarea
                {...register("subtitle")}
                ref={(e) => {
                  register("subtitle").ref(e);
                  // @ts-ignore
                  subtitleRef.current = e;
                }}
                placeholder="Sub-title"
                rows={1}
                className={`text-2xl md:text-3xl lg:text-3xl text-muted-foreground border-none shadow-none focus-visible:ring-0 px-0 h-auto !min-h-0 resize-none overflow-hidden py-1 ${errors.subtitle ? "placeholder:text-destructive" : ""}`}
              />
              {errors.subtitle && (
                <p className="text-sm text-destructive font-medium px-2">
                  {errors.subtitle.message}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 py-0">
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  id="cover-upload"
                  className="hidden"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
                {watchCoverImage ? (
                  <div className="inline-flex items-center rounded-md bg-secondary text-secondary-foreground text-sm font-medium h-9 px-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setValue("coverImage", "", { shouldValidate: true });
                      }}
                      className="text-muted-foreground hover:text-foreground mr-2 font-bold focus:outline-none"
                      title="Discard image"
                    >
                      ✕
                    </button>
                    <a
                      href={watchCoverImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none"
                    >
                      View Cover Image
                    </a>
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    className="h-9 px-3 text-sm rounded-md font-medium"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingImage}
                    type="button"
                  >
                    {uploadingImage ? "Uploading..." : "Upload Cover Image"}
                  </Button>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() =>
                    setValue("isActive", !watchIsActive, {
                      shouldValidate: true,
                    })
                  }
                  className={
                    watchIsActive
                      ? "h-9 px-3 text-sm bg-blue-100 hover:bg-blue-200 text-blue-600 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 dark:text-blue-500 rounded-md font-medium"
                      : "h-9 px-3 text-sm bg-amber-100 hover:bg-amber-200 text-amber-600 dark:bg-amber-900/30 dark:hover:bg-amber-900/50 dark:text-amber-500 rounded-md font-medium"
                  }
                >
                  {watchIsActive ? (
                    <>
                      <IconCheck className="w-4 h-4" />
                      Published
                    </>
                  ) : (
                    <>
                      <IconArchive className="w-4 h-4" />
                      Archived
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div className="flex-1 min-h-0 flex flex-col mt-2">
              <BlogEditor
                markdown={watchContent || ""}
                onChange={(val) =>
                  setValue("content", val, { shouldValidate: true })
                }
              />
              {errors.content && (
                <p className="text-sm text-destructive font-medium px-2 mt-2">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <DrawerFooter className="flex-row w-full">
          <DrawerClose asChild>
            <Button variant="outline" className="w-1/2" type="button">
              Cancel
            </Button>
          </DrawerClose>
          <Button
            className="w-1/2"
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Post"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
