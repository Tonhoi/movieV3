import { ReactNode, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";

import Login from "@/containers/Login/Login";
import { Header, Footer } from "@/compositions";
import LoadingScreen from "../LoadingScreen";
import ErrorPage from "@/pages/404";
import Register from "@/containers/Register/Register";
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [asPath]);

  if (asPath === "/login") return <Login />;
  if (asPath === "/register") return <Register />;
  if (asPath === "/404") return <ErrorPage />;
  if (asPath.includes("personal") && !user) return <Login />;

  return (
    <Container>
      <LoadingScreen fadeOut={fadeOut} />

      <Header />

      {children}

      <Footer />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.main,
    color: "#ECECEC",
  };
});

export default Layout;
