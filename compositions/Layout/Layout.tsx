import { Fragment, ReactNode, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";

import Login from "@/containers/Login/Login";
import { Header, Footer, Slider } from "@/compositions";
import LoadingScreen from "../LoadingScreen";
import ErrorPage from "@/pages/404";
import Search from "@/containers/Search/Search";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = "unset";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (asPath === "/login") return <Login />;
  if (asPath === "/404") return <ErrorPage />;

  const isSLider =
    asPath.startsWith("/detail") ||
    asPath.startsWith("/play") ||
    asPath.startsWith("/search");

  return (
    <Fragment>
      <Container>
        <LoadingScreen fadeOut={fadeOut} />
        <Header />

        {!isSLider && <Slider />}

        {children}

        <Box className={"footer"}>
          <Footer />
        </Box>
      </Container>
    </Fragment>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    minHeight: "100vh",
    backgroundColor: theme.palette.primary.main,
    color: "#ECECEC",

    ["& .footer"]: {
      padding: "32px 0px",
      marginTop: 50,
      backgroundColor: "rgb(10, 12, 15)",
      borderTop: "1px solid rgb(45, 47, 52)",
    },
  };
});

export default Layout;
