import { Fragment } from "react";
import { CacheProvider, type EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { Head } from "@/hocs";
import { createEmotionCache } from "@/libs";
import { SWR } from "@/contexts";
import Layout from "@/components/Layout/Layout";
import ThemeProvider from "@/contexts/ThemeProvider/ThemeProvider";
import "@/styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: { initData: []; fallback: [] };
}

export default function App(props: MyAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

  return (
    <Fragment>
      <NextNProgress />
      <CacheProvider value={emotionCache}>
        <Head />
        <ThemeProvider>
          <SWR fallback={pageProps.fallback}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SWR>
        </ThemeProvider>
      </CacheProvider>
    </Fragment>
  );
}
