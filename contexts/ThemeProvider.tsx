import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import {
  sanProRegular,
  sanProLight,
  sanProBold,
  netflixRegular,
  netflixBold,
  netflixMedium,
  netflixThin,
  sanProExtraLight,
  ryeRegular,
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
    fontFamily: sanProRegular.style.fontFamily,
    h1: createTypographyProperties({
      fontFamily: sanProRegular.style.fontFamily,
      fontWeight: 400,
      fontSize: 50,
      lineHeight: "55px",
    }),
    h2: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "48px",
    }),
    h3: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "30px",
    }),
    h4: createTypographyProperties({
      fontFamily: sanProRegular.style.fontFamily,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "40px",
    }),

    // custom
    h5: createTypographyProperties({
      fontFamily: sanProRegular.style.fontFamily,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "16px",
    }),

    h6: createTypographyProperties({
      fontFamily: sanProRegular.style.fontFamily,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "16px",
    }),
    body1: createTypographyProperties({
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "32px",
    }),
    body2: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "17px",
    }),
    subtitle1: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "17px",
    }),
    subtitle2: createTypographyProperties({
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "12px",
    }),
    subtitle3: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
    }),
    subtitle4: createTypographyProperties({
      fontFamily: sanProRegular.style.fontFamily,
      fontWeight: 500,
      fontSize: 13,
      lineHeight: "18px",
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

    ryeTitle: createTypographyProperties({
      fontFamily: ryeRegular.style.fontFamily,
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "26px",
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
        maxWidth: "lg",
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
