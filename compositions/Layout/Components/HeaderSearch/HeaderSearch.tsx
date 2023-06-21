import { Box, TextField, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import SearchPoper from "./SearchPoper";

const HeaderSearch = () => {
  const [ref, { width }] = useMeasure();

  return (
    <Container ref={ref}>
      <Tippy
        content={<SearchPoper width={width} />}
        trigger="click"
        placement="bottom-start"
        interactive
        maxWidth={width}
        onHide={() => {
          console.log("đã trigger");
        }}
      >
        <TextField
          label={
            <Typography className="placeholder" variant={"h5"}>
              Search here
            </Typography>
          }
          autoComplete=""
          sx={{
            "& fieldset": { border: "none" },
          }}
        />
      </Tippy>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& input"]: {
      color: theme.palette.common.white,
      padding: "10px 14px",
      backgroundColor: "#ffffff33",
    },

    ["& .placeholder"]: {
      color: theme.palette.common.white,
    },
  };
});

export default HeaderSearch;
