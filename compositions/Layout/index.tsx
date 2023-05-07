import { Container } from "@mui/material";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;

  return (
    <Container maxWidth={"xl"}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
