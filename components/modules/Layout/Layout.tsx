import { ReactNode, useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import "react-toastify/dist/ReactToastify.css";

import { Header, Footer } from "@/components/modules";
import LoadingScreen from "../../common/LoadingScreen";
import { auth } from "@/firebase/firebase-config";
import BackToTop from "./BackToTop";
import { throttle } from "lodash";
import { useToggle } from "@/hooks";
import { Auth } from "@/containers/Auth";

interface layoutProps {
  children: ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  const { asPath } = useRouter();
  const [hasScrolledPastHeader, setHasScrolledPastHeader] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const { on: fadeOut, toggle: setFadeOut } = useToggle();

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

  useEffect(() => {
    const handleScroll = throttle((event) => {
      if (window.scrollY > 200 && !hasScrolledPastHeader) {
        setHasScrolledPastHeader(true);
      } else if (window.scrollY < 200 && hasScrolledPastHeader) {
        setHasScrolledPastHeader(false);
      }
    }, 250);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledPastHeader]);

  if (asPath === "/login") return <Auth type="login" />;
  if (asPath.includes("me") && !user) return <Auth type="login" />;
  if (asPath === "/register") return <Auth type="register" />;

  return (
    <Container>
      <LoadingScreen fadeOut={fadeOut} />

      <Header hasScrolledPastHeader={hasScrolledPastHeader} />

      {children}

      <Footer />

      <BackToTop hasScrolledPastHeader={hasScrolledPastHeader} />
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
  };
});

export default Layout;
