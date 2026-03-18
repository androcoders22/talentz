import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectToDatabase();
    const activeBlogs = await Blog.find({ isActive: true }).sort({
      createdAt: -1,
    });
    return NextResponse.json(activeBlogs);
  } catch (error) {
    console.error("Failed to fetch active blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch active blogs" },
      { status: 500 },
    );
  }
}
