import { memo, useCallback, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth as firebaseAuth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { timeAgo } from "./timeAgo";
import { ChatIcon, HeartIcon, Image } from "@/components";
import avatar from "@/public/image/avatar2.png";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import { ConfirmDialogContext } from "@/contexts/CommentDialogProvider";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ROUTES } from "@/routers";

interface DetailCommentProps {
  auth: string;
  time: number;
  title: string;
  user_id: string;
  id: string;
  isUserLikeComment: Array<string>;
}

let userLikeComments: Array<string> = [];

const DetailComment = (props: DetailCommentProps) => {
  const { auth, time, title, user_id, id, isUserLikeComment } = props;

  const router = useRouter();
  const [user] = useAuthState(firebaseAuth);
  const commentDocRef = doc(db, "comment", id);

  const { toggleOn, setGetIdComment } = useContext(ConfirmDialogContext);

  const handleComfirmDialog = useCallback(() => {
    toggleOn();
    setGetIdComment(id);
  }, []);

  const handleLikeComment = async () => {
    try {
      if (!user) return router.push(ROUTES.login);

      const getComment = await getDoc(commentDocRef);
      const dataComment = getComment.data();

      if (!dataComment) return null;
      const isLikeUser: boolean = dataComment.users_like.includes(user?.uid);

      if (isLikeUser) {
        userLikeComments = dataComment.users_like.filter(
          (user_id: string) => user_id !== user?.uid
        );
      } else {
        userLikeComments.push(...dataComment.users_like, user?.uid);
      }

      await updateDoc(commentDocRef, {
        users_like: userLikeComments,
      });
    } catch (error) {
      toast.error("có lỗi xảy ra trong quá trình thao tác, vui lòng thử lại!");
    }
  };

  return (
    <Container className={"detail-comment"}>
      <Box className={"comment-avatar"}>
        <Image src={avatar} />
      </Box>

      <Box className={"comment-wrapper"}>
        <Box className={"comment-content"}>
          <Typography variant="caption" className="comment-auth">
            {auth}
          </Typography>

          <Typography variant="caption" className="comment-time">
            {timeAgo(time)}
          </Typography>

          <Typography variant="body1" className={"comment-description"}>
            {title}
          </Typography>
        </Box>

        <Box className={"comment-action"}>
          <Button
            variant="text"
            disableRipple
            startIcon={<HeartIcon className="like-icon" />}
            onClick={handleLikeComment}
            className={`btn btn-like ${
              isUserLikeComment.includes(user_id) ? "active" : ""
            }`}
          >
            <Typography variant="caption" className={"btn-text"}>
              Thích
            </Typography>
          </Button>

          <Button
            variant="text"
            className={"btn btn-comment"}
            startIcon={<ChatIcon className="chat-icon" />}
          >
            <Typography variant="caption" className={"btn-text"}>
              Trả lời
            </Typography>
          </Button>

          {user_id === user?.uid && (
            <Button
              variant="text"
              startIcon={<DeleteIcon className="delete-icon" />}
              className={"btn btn-delete"}
              onClick={handleComfirmDialog}
            >
              <Typography variant="caption" className={"btn-text"}>
                Xóa
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    display: "grid",
    gridTemplateColumns: "55px 1fr",
    marginBottom: 12,

    ["& .comment-avatar"]: {
      position: "relative",
      width: 42,
      height: 42,

      ["& img"]: {
        objectFit: "cover",
        borderRadius: "50%",
      },
    },

    ["& .comment-wrapper"]: {
      ["& .comment-content"]: {
        ["& .comment-auth"]: {
          fontSize: 14,
        },

        ["& .comment-time"]: {
          fontSize: 13,
          marginLeft: 4,
          color: "#9a9898",
        },

        ["& .comment-description"]: {
          fontSize: 14,
          lineHeight: 1.2,
        },
      },

      ["& .comment-action"]: {
        marginTop: 4,

        ["& .btn"]: {
          color: "#828387",
          padding: "6px 0",
          textTransform: "inherit",
          justifyContent: "start",
        },

        ["& .btn-like.active"]: {
          color: "#1cc749",

          ["& #stroke_color"]: {
            stroke: "#1cc749",
          },

          ["& path"]: {
            fill: "#1cc749",
          },
        },

        ["& .btn-comment"]: {
          margin: "0px 4px",
        },

        ["& .btn-text"]: {
          fontSize: 13,
        },

        ["& .MuiButton-startIcon"]: {
          marginRight: 4,
        },
      },
    },
  };
});

export default memo(DetailComment);
