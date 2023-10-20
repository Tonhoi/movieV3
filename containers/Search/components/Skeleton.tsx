import { Box, Stack, styled } from "@mui/material";
import { PropsWithChildren } from "react";
import ReactLoadingSkeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SkeletonProps {
  count: number;
  inline?: boolean;
}

const Skeleton = (props: SkeletonProps) => {
  const { count, inline = false } = props;
  return (
    <Container>
      <ReactLoadingSkeleton
        count={count}
        containerClassName="skeleton-wrapper"
        inline={inline}
        className="skeleton-image"
        wrapper={CustomReactLoadingSkeleton}
      />
    </Container>
  );
};

const CustomReactLoadingSkeleton = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Stack className={"skeleton-content-wrapper"}>
      <Box className={"skeleton-content-image"}>{children}</Box>
      <Box flex={1}>
        <Box className={"react-loading-skeleton skeleton-content"} height={30} />
        <Box className={"react-loading-skeleton skeleton-content"} height={16} />
        <Box className={"react-loading-skeleton skeleton-content"} height={32} />
      </Box>
    </Stack>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: "20px",

    ["& .skeleton-image"]: {
      height: 210,
      width: 156,

      [theme.breakpoints.down("sm")]: {
        width: 91,
        height: 121,
      },
    },

    ["& .skeleton-wrapper"]: {
      flex: 1,
    },

    ["& .skeleton-content-wrapper"]: {
      flexDirection: "row",
      padding: 20,
      gap: 16,
      // alignItems: "flex-end",
    },
  };
});

export default Skeleton;