import { memo, useCallback } from "react";
import { Box, styled } from "@mui/material";

import { ArrowRightIcon } from "@/components/common";

const BackToTop = ({ hasScrolledPastHeader }: { hasScrolledPastHeader: boolean }) => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container
      className={hasScrolledPastHeader ? "active" : ""}
      onClick={handleScrollTop}
    >
      <ArrowRightIcon className="arrow-icon" />
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    position: "fixed",
    bottom: 35,
    right: 35,
    zIndex: 999,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,

    opacity: 0,
    borderRadius: "50%",
    backgroundColor: "#1cc749",

    transform: "scale(0)",
    transition: "all linear 0.2s",
    cursor: "pointer",

    ["&.active"]: {
      opacity: 1,
      transform: "scale(1)",
    },

    ["&:hover"]: {
      transform: "translateY(-8px)",
    },

    ["& .arrow-icon"]: {
      transform: "rotate(-90deg)",
      color: "#fff",
    },
  };
});

export default memo(BackToTop);
