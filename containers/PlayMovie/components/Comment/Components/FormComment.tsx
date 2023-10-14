import { Fragment, memo, useCallback, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, styled } from "@mui/material";

import { ROUTES } from "@/routers";
import { Image, Link } from "@/components";
import { FormControl } from "@/compositions";
import { auth, db } from "@/firebase/firebase-config";
import { Comment as YupConmment } from "@/yups/comment/comment";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { defaultCommentFormState } from "@/yups/comment/defaultCommentFormState";

import avatar from "@/public/image/avatar2.png";

const FormComment = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const commentRef = collection(db, "comment");

  const { control, handleSubmit, reset } = useForm({
    resolver: YupConmment,
    defaultValues: defaultCommentFormState(),
  });

  const onSubmit = useCallback(async (props: any, e: any) => {
    const { comment } = props;
    if (comment == "") return null;

    await addDoc(commentRef, {
      text: comment,
      createdAt: serverTimestamp(),
      name: auth.currentUser?.displayName,
      movie_id: router.query.id,
      user_id: user?.uid,
      users_like: [],
      comment_child: [],
    });

    reset(defaultCommentFormState, {
      keepDirty: false,
    });
  }, []);

  return (
    <Container>
      <Box className={"my-avatar"}>
        <Image src={avatar} />
      </Box>

      {user ? (
        <Fragment>
          <FormControl
            control={control}
            name="comment"
            placeholder="Viết bình luận..."
            InputProps={{ disableUnderline: true, rows: 3, multiline: true }}
          />
          <Box className={"comment-action"}>
            <Button variant="text" className={"btn-cancel"}>
              <Typography variant={"caption"} className={"btn-text"}>
                Hủy
              </Typography>
            </Button>

            <Button
              variant="contained"
              className={"btn-comment"}
              onClick={handleSubmit(onSubmit)}
            >
              <Typography variant={"caption"} className={"btn-text"}>
                Bình luận
              </Typography>
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Typography variant="caption" className={"no-login"}>
          Bạn cần
          <Link href={ROUTES.login} underline="hover">
            đăng nhập
          </Link>
          để sử dụng chức năng này
        </Typography>
      )}
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    display: "grid",
    gridTemplateColumns: "55px 1fr",
    marginBottom: 40,

    ["& .my-avatar"]: {
      position: "relative",
      width: 42,
      height: 42,

      ["& img"]: {
        objectFit: "cover",
        borderRadius: "50%",
      },
    },

    ["& .MuiFormControl-root"]: {
      border: "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "4px",

      ["&:focus-within, &:hover"]: {
        border: "1px solid #1cc749",
      },
    },

    ["& .comment-action"]: {
      marginTop: 12,
      gridColumn: "1 / 3",
      textAlign: "right",

      ["& .btn-cancel"]: {
        backgroundColor: "transparent",
        color: "#a9a9ac",
        marginRight: 12,
        padding: "5px 16px",
      },

      ["& .btn-comment"]: {
        backgroundColor: "#00c635",
        color: "#ececec",
        padding: "5px 16px",
      },
    },

    ["& .no-login"]: {
      position: "relative",
      top: 11,

      ["& a"]: {
        color: "#1cc749",
        margin: "0px 2px",
      },
    },
  };
});

export default memo(FormComment);
