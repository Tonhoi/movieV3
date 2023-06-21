import { Box, Button, Divider, Stack, Typography, styled } from "@mui/material";
import { useForm } from "react-hook-form";

import { ChatIcon, HeartIcon, Image } from "@/components";
import { FormControl as TextArea } from "@/compositions";

import avatar from "@/public/image/avatar.png";

const Comment = () => {
  const { control } = useForm();

  return (
    <Container>
      <Typography variant={"h3"}>100 Comments</Typography>

      <Stack className={"form-control"}>
        <Box className={"image-wrapper"}>
          <Image src={avatar} />
        </Box>

        <Box className={"form-content"}>
          <TextArea
            control={control}
            name={"comment"}
            placeholder="Post a comment"
            InputProps={{ disableUnderline: true, rows: 3, multiline: true }}
          />

          <Box className={"form-button"}>
            <Button variant={"contained"} className={"btn btn-cancel"}>
              <Typography variant={"h5"}>cancel</Typography>
            </Button>
            <Button variant={"contained"} className={"btn btn-submit"}>
              <Typography variant={"h5"}>Submit</Typography>
            </Button>
          </Box>
        </Box>
      </Stack>

      <Divider className={"divider"} />

      <Box className={"comment-list"}>
        <Stack className={"comment-item"}>
          <Box className={"image-wrapper"}>
            <Image src={avatar} />
          </Box>

          <Box className={"comment-right"}>
            <Stack className={"title-and-time"}>
              <Typography className={"title"} variant={"h5"}>
                class1a .
              </Typography>
              <Typography className={"time"} variant={"h5"}>
                18day(s)
              </Typography>
            </Stack>

            <Typography className={"description"} variant={"h5"}>
              cuma aku kah yang nonton ini di 2023
            </Typography>

            <Stack className="options">
              <Button
                variant={"text"}
                startIcon={<HeartIcon />}
                className={"btn btn-like"}
              >
                <Typography variant={"h5"}>Like</Typography>
              </Button>
              <Button
                variant={"text"}
                startIcon={<ChatIcon />}
                className={"btn btn-reply"}
              >
                <Typography variant={"h5"}>Reply</Typography>
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    paddingTop: "24px",

    ["& .divider"]: {
      backgroundColor: "#ccc",
      margin: "8px 0px 24px",
    },

    ["& .form-control"]: {
      flexDirection: "row",
      padding: "24px 0px",

      ["& .image-wrapper"]: {
        position: "relative",
        width: 42,
        height: 42,
        borderRadius: "50%",
        overflow: "hidden",
        marginRight: 12,
      },

      ["& .form-content"]: {
        position: "relative",
        flex: 1,

        ["& .MuiFormControl-root"]: {
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "4px",

          ["&:focus-within, &:hover"]: {
            border: "1px solid #1cc749",
          },
        },

        ["& .MuiInputBase-root"]: {
          marginTop: 0,
        },

        ["& .form-button"]: {
          textAlign: "right",
          marginTop: 12,
          display: "block",

          ["& .btn-cancel"]: {
            marginRight: 12,
            backgroundColor: "#2d2f34",
            color: "#A9A9AC",
          },

          ["& .btn-submit"]: {
            backgroundColor: "#00c635",
            color: "#ECECEC",
            opacity: 0.5,
            transition: "opacity linear 0.2",

            ["&.active"]: {
              opacity: 1,
            },
          },
        },
      },
    },

    ["& .comment-list"]: {
      ["& .comment-item"]: {
        flexDirection: "row",
        marginBottom: 24,
        ["& .image-wrapper"]: {
          position: "relative",
          width: 42,
          height: 42,
          borderRadius: "50%",
          overflow: "hidden",
          marginRight: 12,
        },

        ["& .comment-right"]: {
          ["& .title-and-time"]: {
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          },

          ["& .description"]: {
            marginTop: 8,
            color: theme.palette.common.white,
          },

          ["& .options"]: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 6,

            ["& .btn"]: {
              color: "#828387",
              padding: "6px 0px",
              justifyContent: "left",
              textTransform: "capitalize",

              ["&:hover"]: {
                color: "#1cc749",
                opacity: 1,
              },
            },
          },
        },
      },
    },
  };
});

export default Comment;
