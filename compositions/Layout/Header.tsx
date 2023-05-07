import Image from "@/components/Image";
import { Box, Grid, Stack, styled } from "@mui/material";
import { Fragment } from "react";

import logo from "@/public/image/logo.png";
import { useMeasure } from "react-use";
import Link from "@/components/Link";

const Header = () => {
  const [ref, { width }] = useMeasure();
  return (
    <Fragment>
      <Grid container justifyContent={"space-between"}>
        <Grid item lg={6}>
          <Stack direction={"row"} alignItems={"center"} gap={"30px"}>
            <Box position={"relative"} ref={ref} width={170} height={43}>
              <Image
                src={logo}
                width={width}
                height={width}
                style={{ objectFit: "cover" }}
              />
            </Box>

            <StyledLink href={"/"}>For You</StyledLink>
            <StyledLink href={"/movie"}>Movie</StyledLink>
            <StyledLink href={"/tv"}>Tv</StyledLink>
          </Stack>
        </Grid>
        <Grid item lg={6}>
          menu item 2
        </Grid>
      </Grid>
    </Fragment>
  );
};

const StyledLink = styled(Link)(() => {
  return {
    textDecoration: "none",
    "&:hover": {
      color: "rgb(28, 199, 73)",
      transition: "color linear 0.2s",
    },
  };
});

export default Header;
