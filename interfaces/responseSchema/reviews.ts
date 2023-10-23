interface AuthorDetailProps {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
}

export interface ReviewProps {
  author: string;
  author_details: AuthorDetailProps;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
