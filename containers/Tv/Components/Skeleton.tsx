import { Box, styled } from "@mui/material";
import { PropsWithChildren } from "react";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  count: number;
  inline?: boolean;
  height: number;
}

const Skeleton = (props: SkeletonProps) => {
  const { count, inline = false, height } = props;
  return (
    <Container>
      <Box display={"flex"}>
        <ReactLoadingSkeleton
          count={count}
          containerClassName="skeleton-wrapper"
          inline={inline}
          height={height}
          className="skeleton-image"
          wrapper={CustomReactLoadingSkeleton}
        />
      </Box>
    </Container>
  );
};

const CustomReactLoadingSkeleton = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Box>
      {children}
      <Box className={"react-loading-skeleton skeleton-content"} />
    </Box>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: "20px",
    ["& .skeleton-wrapper"]: {
      flex: 1,
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 24,

      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },

      ["& .skeleton-content"]: {
        height: 35,
        marginTop: 8,
      },
    },
  };
});

export default Skeleton;
