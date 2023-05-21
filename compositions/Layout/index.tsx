import { Fragment, ReactNode } from "react";

import { Container } from "@mui/material";

import { Header, Footer, Slider } from "@/compositions";
import { useRouter } from "next/router";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();

  return (
    <Container maxWidth={"xl"}>
      {asPath !== "/login" && (
        <Fragment>
          <Header />
          <Slider />
        </Fragment>
      )}

      {children}
      {asPath !== "/login" && <Footer />}
    </Container>
  );
};

export default Layout;
