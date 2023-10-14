import { memo, useContext, useEffect, useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth as firebaseAuth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";

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
}

let text: Array<string> = [];

const DetailComment = (props: DetailCommentProps) => {
  const { auth, time, title, user_id, id } = props;
  const [user] = useAuthState(firebaseAuth);
  const [isLike, setIsLike] = useState<boolean>(false);
  const router = useRouter();
  const commentDocRef = doc(db, "comment", id);

  const { toggleOn, setGetIdComment } = useContext(ConfirmDialogContext);

  const handleComfirmDialog = () => {
    toggleOn();
    setGetIdComment(id);
  };

  const checkLikeUser = async () => {
    const getComment = await getDoc(commentDocRef);
    const dataComment = getComment.data();

    if (!dataComment) return null;
    const isLikeUser: boolean = dataComment.users_like.includes(user?.uid);

    return {
      isLikeUser,
      dataComment,
    };
  };

  useEffect(() => {
    const checkStatusUserLike = async () => {
      const { isLikeUser }: any = await checkLikeUser();

      if (isLikeUser) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    };
    checkStatusUserLike();
  }, [id]);

  const handleLikeComment = async () => {
    try {
      if (!user) return router.push(ROUTES.login);

      const { isLikeUser, dataComment }: any = await checkLikeUser();

      if (isLikeUser) {
        text = dataComment?.users_like.filter((user_id: string) => user_id !== user?.uid);
        setIsLike(false);
      } else {
        text.push(...dataComment?.users_like, user?.uid);
        setIsLike(true);
      }

      await updateDoc(commentDocRef, {
        users_like: text,
      });
    } catch (error) {
      console.log("có lỗi xảy ra");
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
            className={`btn btn-like ${isLike ? "active" : ""}`}
            startIcon={<HeartIcon className="like-icon" />}
            disableRipple
            onClick={handleLikeComment}
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
              className={"btn btn-delete"}
              startIcon={<DeleteIcon className="delete-icon" />}
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
