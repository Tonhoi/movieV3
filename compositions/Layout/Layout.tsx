import {  ReactNode, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

import Login from "@/containers/Login/Login";
import { Header, Footer, Slider } from "@/compositions";
import LoadingScreen from "../LoadingScreen";
import ErrorPage from "@/pages/404";
import Register from "@/containers/Register/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase-config";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [user] = useAuthState(auth);

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
  if (asPath === "/register") return <Register />;
  if (asPath === "/404") return <ErrorPage />;
  if (asPath.includes("personal") && !user) return <Login />;

  const isSLider =
    asPath.startsWith("/detail") ||
    asPath.startsWith("/play") ||
    asPath.startsWith("/search") ||
    asPath.startsWith("/actor-info") ||
    asPath.startsWith("/personal");

  return (
    <Container>
      <LoadingScreen fadeOut={fadeOut} />

      <Header />

      {!isSLider && <Slider />}

      {children}

      <Box className={"footer"}>
        <Footer />
      </Box>
    </Container>
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
