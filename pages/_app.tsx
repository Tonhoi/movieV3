import "@/styles/globals.css";
import { CacheProvider, type EmotionCache } from "@emotion/react";

import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { Head } from "@/hocs";
// import Setting from "@/contexts/Setting";
// import { Layout } from "@/compositions";
import { useRouter } from "next/router";
import { createEmotionCache } from "@/libs";

import { SWR } from "@/contexts";
import Layout from "@/compositions/Layout/Layout";
import ThemeProvider from "@/contexts/ThemeProvider";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/compositions/Transition";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: { initData: []; fallback: [] };
}

export default function App(props: MyAppProps) {
  const { emotionCache = clientSideEmotionCache, pageProps, Component } = props;
  // const router = useRouter();
  // console.log("re-render");

  return (
    <>
      <NextNProgress />
      <CacheProvider value={emotionCache}>
        <Head />

        <ThemeProvider>
          <SWR fallback={pageProps.fallback}>
            <Layout>
              {/* <AnimatePresence mode="wait"> */}
              {/* <motion.div key={router.route}> */}
              {/* <Transition /> */}
              <Component {...pageProps} />
              {/* </motion.div> */}
              {/* </AnimatePresence> */}
            </Layout>
          </SWR>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
