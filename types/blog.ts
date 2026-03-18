export interface BlogPost {
  _id: string;
  name: string;
  coverImage?: string;
  title: string;
  subTitle?: string;
  content: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
