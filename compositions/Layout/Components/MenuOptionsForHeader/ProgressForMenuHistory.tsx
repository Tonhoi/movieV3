import { useEffect, useState } from "react";
import {Box, Typography, LinearProgress, LinearProgressProps} from "@mui/material";

interface LinearProgressWithLabelProps extends LinearProgressProps {
  value: number;
}

function LinearProgressWithLabel(props: LinearProgressWithLabelProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1, color: "red" }}>
        <LinearProgress variant="determinate" color={"success"} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
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
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
