import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import {
  robotoBold,
  robotoMedium,
  robotoRegular,
  netflixRegular,
  netflixBold,
  netflixMedium,
  netflixThin,
} from "@/libs";
import { COMPONENT_STATE, PALETTE_COLOR, PSEUDO_STATE } from "@/configuration";

type OmitProperties = "fontSize" | "fontWeight" | "lineHeight" | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    // color?: string;
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
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    grey: {},

    error: {
      main: PALETTE_COLOR.primary,
    },

    text: {
      primary: PALETTE_COLOR.gray,
      secondary: PALETTE_COLOR.green,
    },
  },
  typography: {
    fontFamily: robotoRegular.style.fontFamily,
    h1: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 400,
      fontSize: 50,
      lineHeight: "55px",
    }),
    h2: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "48px",
    }),
    h3: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "30px",
    }),
    h4: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "40px",
    }),

    // custom
    h5: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "16px",
    }),
    h6: createTypographyProperties({
      fontFamily: robotoRegular.style.fontFamily,
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
      fontSize: 16,
      lineHeight: "24px",
    }),
    subtitle2: createTypographyProperties({
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "12px",
    }),

    netflixtitle1: createTypographyProperties({
      fontFamily: netflixMedium.style.fontFamily,
      fontWeight: 500,
      fontSize: 32,
      lineHeight: "40px",
    }),
    netflixtitle2: createTypographyProperties({
      fontFamily: netflixRegular.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "16px",
    }),
    netflixtitle3: createTypographyProperties({
      fontFamily: netflixRegular.style.fontFamily,
      fontWeight: 400,
      fontSize: 13,
      lineHeight: "16px",
    }),
    netflixtitle4: createTypographyProperties({
      fontFamily: netflixMedium.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "16px",
    }),
    netflixtitle5: createTypographyProperties({
      fontFamily: netflixThin.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "16px",
    }),
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },

    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },
    MuiButton: {
      defaultProps: {},

      styleOverrides: {
        root: {
          borderColor: PALETTE_COLOR.white,
          [PSEUDO_STATE.hover]: {
            borderColor: PALETTE_COLOR.white,
            opacity: 0.6,
            transition: "opacity linear 0.3s",
          },
        },
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
