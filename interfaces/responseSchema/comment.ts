interface CreatedAt {
  [x: string]: any;
  nanoseconds: number;
  seconds: number;
}

export interface Comment {
  createdAt: CreatedAt;
  id: string;
  movie_id: string;
  text: string;
  name: string;
  user_id: string;
  users_like: Array<string>;
}
