import { MouseEventHandler } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { REVIEWSCHEMA } from "@/interfaces/responseSchema/reviews";
import usePoster from "@/hooks/usePoster";
import imageError from "@/public/image/avatar.png";

interface UserReviewProps {
  data: Array<REVIEWSCHEMA>;
}

let isShowMore = false;

const UserReview = ({ data }: UserReviewProps) => {
  const handleShowAllDescription: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;

    if (!target) return null;
    const parentElement = target.parentElement;

    if (!parentElement) return null;
    const descElement = parentElement.querySelector(".description");

    if (!descElement) return null;
    descElement.classList.toggle("show-more");

    if (descElement.classList.contains("show-more")) {
      isShowMore = true;
      target.textContent = "Ẩn bớt";
    } else {
      isShowMore = false;
      target.textContent = "Đọc thêm";
    }
  };

  return (
    <Container>
      {data &&
        data.map((el) => {
          const { author, content, created_at, author_details } = el;
          const poster = usePoster(author_details.avatar_path);

          return (
            <StyledReviewWrapper poster={poster} key={el.id}>
              <Box className={"image-wrapper"} />

              <Typography variant={"h5"} className={"vote-average"}>
                {author_details.rating ?? 0}
              </Typography>

              <Stack className="review-content">
                <Typography variant={"h5"} className={"description"}>
                  {content}
                </Typography>

                <Typography
                  variant="caption"
                  className="btn-show-more"
                  onClick={handleShowAllDescription}
                >
                  Đọc Thêm
                </Typography>

                <Typography variant="h5" color={"#A67C7C"} className={"time"}>
                  {created_at} by {author}
                </Typography>
              </Stack>
            </StyledReviewWrapper>
          );
        })}
    </Container>
  );
};

const Container = styled(Stack)(() => {
  return {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: 8,
  };
});

const StyledReviewWrapper = styled(Stack, {
  shouldForwardProp: (propName) => propName !== "poster",
})<{ poster: string }>(({ poster, theme }) => {
  return {
    position: "relative",
    border: "1px solid rgb(38 36 36)",
    padding: 15,
    flexDirection: "row",
    gap: 15,

    ["& .image-wrapper"]: {
      width: 50,
      height: 50,
      flexShrink: 0,
      borderRadius: 4,

      backgroundImage: `url(${poster}), url(${imageError.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },

    ["& .vote-average"]: {
      position: "absolute",
      top: 15,
      right: 15,

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 30,
      height: 30,
      color: theme.palette.text_color.main,

      border: "2px solid #1CC749",
      borderRadius: "50%",
    },

    ["& .review-content"]: {
      gap: 8,
      width: "100%",

      ["& .description"]: {
        width: "100%",
        display: "-webkit-box",
        WebkitLineClamp: "3",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        maxWidth: "calc(100% - 45px)",
        color: theme.palette.text_color.main,

        ["&.show-more"]: {
          WebkitLineClamp: "unset",
        },
      },

      ["& .btn-show-more"]: {
        cursor: "pointer",
        color: "#A67C7C",
        fontSize: 14,
        lineHeight: 1.15,
        transition: "opacity linear 0.3s",

        ["&:hover"]: {
          opacity: 0.8,
        },
      },
    },
  };
});

export default UserReview;
