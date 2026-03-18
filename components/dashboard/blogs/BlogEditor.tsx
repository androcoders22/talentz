"use client";

import React from "react";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";

interface BlogEditorProps {
  markdown: string;
  onChange: (markdown: string) => void;
}

const toolbars = [
  "bold",
  "underline",
  "italic",
  "-",
  "strikeThrough",
  "title",
  "quote",
  "unorderedList",
  "orderedList",
  "-",
  "code",
  "link",
  "image",
  "-",
  "revoke",
  "next",
  "=",
  "prettier",
  "pageFullscreen",
  "preview",
] as const;

import { s3Api } from "@/lib/api/s3";

export default function BlogEditor({ markdown, onChange }: BlogEditorProps) {
  const onUploadImg = async (
    files: Array<File>,
    callback: (urls: any[]) => void,
  ) => {
    const res = await Promise.all(
      files.map(async (file) => {
        try {
          const form = new FormData();
          form.append("file", file);

          const data = await s3Api.uploadImage(form);

          return {
            url: data.url,
            alt: file.name,
            title: file.name,
          };
        } catch (error) {
          console.error(error);
          throw error;
        }
      }),
    );

    callback(res);
  };

  return (
    <MdEditor
      modelValue={markdown}
      onChange={onChange}
      language="en-US"
      className="!h-full flex-1 min-h-[500px]"
      toolbars={toolbars as any}
      onUploadImg={onUploadImg}
    />
  );
}
