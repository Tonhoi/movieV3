import localFont from "next/font/local";

const robotoRegular = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Regular.ttf",
    },
  ],
});

const robotoMedium = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Medium.ttf",
    },
  ],
});

const robotoBold = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Bold.ttf",
    },
  ],
});


const netflixThin = localFont({
  src: [
    {
      path: "../public/fonts/NetflixSans_W_Th.woff2",
    },
  ],
});

const netflixRegular = localFont({
  src: [
    {
      path: "../public/fonts/NetflixSans_W_Rg.woff2",
    },
  ],
});

const netflixBold = localFont({
  src: [
    {
      path: "../public/fonts/NetflixSans_W_Bd.woff2",
    },
  ],
});
const netflixMedium = localFont({
  src: [
    {
      path: "../public/fonts/NetflixSans_W_Md.woff2",
    },
  ],
});

export { robotoRegular, robotoMedium, robotoBold, netflixRegular, netflixBold, netflixMedium, netflixThin };
