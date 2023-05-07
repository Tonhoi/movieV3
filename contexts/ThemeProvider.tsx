import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { robotoBold, robotoMedium, robotoRegular } from "@/libs";
import { PALETTE_COLOR } from "@/configuration";

type OmitProperties = "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const { fontSize, fontWeight, letterSpacing, lineHeight, ...restProps } = props;

  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    // color,
    ...restProps,
  };
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE_COLOR.primary,
    },
    secondary: {},
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    grey: {},

    // greyColor: {},
    error: {
      main: PALETTE_COLOR.primary,
    },
    // neutral: {
    //   neutral1: PALETTE_COLOR.green,
    //   neutral2: PALETTE_COLOR.gray,
    // },
    text: {
      primary: PALETTE_COLOR.gray,
      secondary: PALETTE_COLOR.green,
    },
  },
  typography: {
    fontFamily: robotoBold.style.fontFamily,
    h1: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 400,
      fontSize: 50,
      lineHeight: "55px",
    }),
    h2: createTypographyProperties({
      fontFamily: robotoBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "48px",
    }),
    h3: createTypographyProperties({
      fontFamily: robotoMedium.style.fontFamily,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "30px",
    }),
    h4: createTypographyProperties({
      fontFamily: robotoBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "40px",
    }),

    // custom
    h5: createTypographyProperties({
      fontFamily: robotoBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "16px",
    }),
    h6: createTypographyProperties({
      fontFamily: robotoBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
    }),
    body1: createTypographyProperties({
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "32px",
    }),
    body2: createTypographyProperties({
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
    }),
    subtitle1: createTypographyProperties({
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "12px",
    }),
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {},

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
