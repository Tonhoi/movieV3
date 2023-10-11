// frame motion
import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";

// variants
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transition = () => {
  return (
    <Container>
      <motion.div
        className={"motion motion-1"}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className={"motion motion-2"}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className={"motion motion-3"}
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .motion"]: {
      position: "fixed",
      top: 0,
      bottom: 0,
      right: "100%",
      height: "100vh",
      width: "100%",

      ["&.motion-1"]: {
        zIndex: 110,
        backgroundColor: "#2e2257",
      },

      ["&.motion-2"]: {
        zIndex: 109,
        backgroundColor: "#3d2b71",
      },

      ["&.motion-3"]: {
        zIndex: 108,
        backgroundColor: "#4b3792",
      },
    },
  };
});

export default Transition;
