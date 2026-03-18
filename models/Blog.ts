import mongoose, { Schema, Document } from "mongoose";

export interface IBlog extends Document {
  name: string;
  coverImage?: string;
  title: string;
  subTitle?: string;
  content: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    coverImage: { type: String, required: false },
    title: { type: String, required: true },
    subTitle: { type: String, required: false },
    content: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.models.Blog ||
  mongoose.model<IBlog>("Blog", BlogSchema);
