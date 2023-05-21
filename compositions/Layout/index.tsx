import { Fragment, ReactNode } from "react";

import { Header, Footer, Slider } from "@/compositions";
import { useRouter } from "next/router";

interface layoutProps {
  children: ReactNode;
}

const Layout = (props: layoutProps) => {
  const { children } = props;
  const { asPath } = useRouter();

  return (
    <Fragment>
      {asPath !== "/login" && (
        <Fragment>
          <Header />
          <Slider />
        </Fragment>
      )}

      {children}
      {asPath !== "/login" && <Footer />}
    </Fragment>
  );
};

export default Layout;
