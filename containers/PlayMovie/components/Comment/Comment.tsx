import { useEffect, useMemo, useState } from "react";
import { Box, styled } from "@mui/material";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import Heading from "./Components/Heading";
import DetailComment from "./Components/DetailComment";
import ConfirmDialogProvider from "@/contexts/CommentDialogProvider";
import { db } from "@/firebase/firebase-config";
import { Comment } from "@/interfaces/responseSchema/comment";
import FormComment from "./Components/FormComment";

dayjs.extend(utc);
dayjs.extend(timezone);
const currentDateTime = dayjs().tz("Asia/Ho_Chi_Minh");

const Comment = () => {
  const router = useRouter();

  const commentRef = collection(db, "comment");

  const [comments, setComments] = useState<Array<Comment>>([]);

  useEffect(() => {
    if (router.query.id) {
      const queryComment = query(commentRef, where("movie_id", "==", router.query.id));

      onSnapshot(queryComment, (snapshop) => {
        let comments: any = [];
        snapshop.forEach((doc) => {
          comments.push({ ...doc.data(), id: doc.id });
        });
        setComments(comments);
      });
    }
  }, [router.query.id]);

  const renderDetailComment = useMemo(() => {
    if (typeof comments == "undefined") return null;

    return comments.map((el) => {
      const { text, name, createdAt, user_id, id } = el;

      // Chuyển đổi timestamp thành đối tượng Day.js và định dạng thời gian
      const createdAtDate = dayjs(createdAt?.toDate()).tz("Asia/Ho_Chi_Minh");

      // Tính toán số phút đã trôi qua từ thời gian đã bình luận đến thời gian hiện tại
      const minutesAgo = currentDateTime.diff(createdAtDate, "minutes");

      return (
        <DetailComment
          key={el.id}
          auth={name}
          title={text}
          time={minutesAgo}
          user_id={user_id}
          id={id}
        />
      );
    });
  }, [comments]);

  return (
    <ConfirmDialogProvider>
      <Container>
        <Heading commentLength={comments.length} />

        <FormComment />
        {renderDetailComment}
      </Container>
    </ConfirmDialogProvider>
  );
};

const Container = styled(Box)(() => {
  return {};
});

export default Comment;
