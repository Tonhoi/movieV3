import "@/styles/globals.css";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import type { AppProps } from "next/app";

import { Head } from "@/hocs";
// import Setting from "@/contexts/Setting";
// import { Layout } from "@/compositions";
import { createEmotionCache } from "@/libs";

import { SWR } from "@/contexts";
import Layout from "@/compositions/Layout";
import ThemeProvider from "@/contexts/ThemeProvider";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: { initData: []; fallback: [] };
}

export default function App(props: MyAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head />

      <ThemeProvider>
        <SWR fallback={pageProps.fallback}>
          {/* <Setting> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
          {/* </Setting> */}
        </SWR>
      </ThemeProvider>
    </CacheProvider>
  );
}
