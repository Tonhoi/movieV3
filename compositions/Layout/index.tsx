import { ReactNode } from "react";

import { Container } from "@mui/material";

import { Header, Footer, Slider } from "@/compositions";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;

  return (
    <Container maxWidth={"xl"}>
      <Header />
      <Slider />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
