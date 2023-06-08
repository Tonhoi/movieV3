import { Fragment, ReactNode } from "react";

import { Header, Footer, Slider } from "@/compositions";
import { useRouter } from "next/router";
import Login from "@/containers/Login";
import { Box, styled } from "@mui/material";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();

  if (asPath === "/login") return <Login />;

  return (
    <Fragment>
      <Container>
        <Header />
        <Slider />

        {children}
      </Container>
      <Footer />
    </Fragment>
  );
};

const Container = styled(Box)(() => {
  return {
    minHeight: "100vh",
    backgroundColor: "#111319",
  };
});

export default Layout;
