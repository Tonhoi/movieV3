import localFont from "next/font/local";

const sanProRegular = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-Regular.ttf",
    },
  ],
});

const sanProLight = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-Light.ttf",
    },
  ],
});
const sanProExtraLight = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-ExtraLight.ttf",
    },
  ],
});

const sanProBold = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-Bold.ttf",
    },
  ],
});

const ryeRegular = localFont({
  src: [
    {
      path: "../public/fonts/Rye-Regular.ttf",
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

export {
  ryeRegular,
  sanProExtraLight,
  sanProRegular,
  sanProLight,
  sanProBold,
  netflixRegular,
  netflixBold,
  netflixMedium,
  netflixThin,
};
