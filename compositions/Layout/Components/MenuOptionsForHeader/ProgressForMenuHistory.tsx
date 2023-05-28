import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  LinearProgressProps,
  Stack,
} from "@mui/material";

interface LinearProgressWithLabelProps extends LinearProgressProps {
  value: number;
}

function LinearProgressWithLabel(props: LinearProgressWithLabelProps) {
  return (
    <Stack direction={"row"} alignItems={"center"}>
      <Box width={"100%"} marginRight={"1px"}>
        <LinearProgress variant="determinate" color={"success"} {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Stack>
  );
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState<number>(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box width={"100%"}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
