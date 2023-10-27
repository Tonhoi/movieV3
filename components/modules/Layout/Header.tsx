import { memo } from "react";
import { Box, Container as MuiContainer, Grid, styled } from "@mui/material";
import { useRouter } from "next/router";

import {
  HeaderNavigation,
  HeaderAction,
  HeaderSearch,
  HeaderOnMobile,
} from "@/components/modules";
import { useMedia, useToggle } from "@/hooks";
import { Overlay } from "@/components/common";

const Header = ({ hasScrolledPastHeader }: { hasScrolledPastHeader: boolean }) => {
  const { asPath } = useRouter();
  const { isMdDown } = useMedia();

  const isActiveHeader =
    hasScrolledPastHeader ||
    asPath.startsWith("/play") ||
    asPath.startsWith("/me") ||
    asPath.startsWith("/artist-info");

  const {
    on: isOpenHeaderMobile,
    toggleOff: handleCloseHeaderMobile,
    toggle: toggleHeaderMobile,
  } = useToggle();

  return (
    <Container className={isActiveHeader ? "active" : ""}>
      <MuiContainer>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item lg={4} md={5} sm={4} xs={12}>
            <HeaderNavigation
              isActiveHeader={isActiveHeader}
              isOpenHeaderMobile={isOpenHeaderMobile}
              toggleHeaderMobile={toggleHeaderMobile}
            />
          </Grid>

          <Grid item lg={5} md={4} sm={6.5} xs={12}>
            <HeaderSearch />
          </Grid>

          <Grid item lg={3} md={3} sm={1.5} xs={12}>
            <HeaderAction />
          </Grid>
        </Grid>
      </MuiContainer>

      {isMdDown && (
        <HeaderOnMobile
          handleCloseHeaderMobile={handleCloseHeaderMobile}
          isOpenHeaderMobile={isOpenHeaderMobile}
        />
      )}

      <Overlay
        backgroundColor="dark_50"
        onClick={handleCloseHeaderMobile}
        className={isOpenHeaderMobile ? "active" : ""}
      />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 99,

    width: "100%",
    padding: "9px 0",
    backgroundColor: "transparent",
    transition: "all linear 0.2s",

    ["&.active"]: {
      backgroundColor: theme.palette.bg_color.main,

      ["& :is(.nav-link, input)"]: {
        color: theme.palette.mode === "light" ? "#000 !important" : "#fff",
      },
    },

    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      paddingBottom: 12,
      backgroundColor: theme.palette.primary.main,
    },

    ["& .logo-on-pc"]: {
      position: "relative",

      width: 170,
      height: 43,

      ["& img"]: {
        objectFit: "cover",
        cursor: "pointer",
      },

      [theme.breakpoints.down("md")]: {
        margin: "0 auto",
        width: 140,
        height: 30,
      },

      [theme.breakpoints.down("sm")]: {
        width: 170,
        height: 43,
      },
    },
  };
});

export default memo(Header);
