import { Fragment, ReactNode } from "react";
import { Box, styled } from "@mui/material";
import { useRouter } from "next/router";

import Login from "@/containers/Login/Login";
import { Header, Footer, Slider } from "@/compositions";

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

const Container = styled(Box)(({ theme }) => {
  return {
    minHeight: "300vh",
    backgroundColor: theme.palette.primary.main,
  };
});

export default Layout;
