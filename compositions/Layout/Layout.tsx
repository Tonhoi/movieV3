import { ReactNode, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";

import Login from "@/containers/Login/Login";
import { Header, Footer } from "@/compositions";
import LoadingScreen from "../LoadingScreen";
import Register from "@/containers/Register/Register";
import { auth } from "@/firebase/firebase-config";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  const { asPath } = useRouter();
  const [fadeOut, setFadeOut] = useState(false);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3500);

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
  if (asPath.includes("personal") && !user) return <Login />;
  if (asPath === "/register") return <Register />;

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
