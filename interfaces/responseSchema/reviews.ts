interface author_details {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
}

export interface REVIEWSCHEMA {
  author: string;
  author_details: author_details;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
