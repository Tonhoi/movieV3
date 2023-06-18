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
