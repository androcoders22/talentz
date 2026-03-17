export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  social_image: string;
  published_at: string;
  slug: string;
  path: string;
  url: string;
  reading_time_minutes: number;
  tags: string | string[];
  tag_list: string[] | string;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
  body_html?: string;
  body_markdown?: string;
}
