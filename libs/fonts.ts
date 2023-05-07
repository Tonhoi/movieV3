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
    }
  ],
});

const robotoBold = localFont({
  src: [
    {
      path: "../public/fonts/Roboto-Bold.ttf",
    }
  ],
});

export { robotoRegular, robotoMedium, robotoBold };
