import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const commentSchema = object({
  comment: string(),
});

export const Comment = yupResolver(commentSchema);
