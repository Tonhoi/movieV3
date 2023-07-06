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
    secondary: {
      main: PALETTE_COLOR.secondary,
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

    text_hover: {
      main: PALETTE_COLOR.text_hover,
    },

    opacity: {
      white_02: PALETTE_COLOR.opacity.light.white_02,
      white_07: PALETTE_COLOR.opacity.light.white_07,
      white_008: PALETTE_COLOR.opacity.light.white_008,
      white_025: PALETTE_COLOR.opacity.light.white_025,

      dark_10: PALETTE_COLOR.opacity.dark.dark_10,
      dark_20: PALETTE_COLOR.opacity.dark.dark_20,
      dark_30: PALETTE_COLOR.opacity.dark.dark_30,
      dark_40: PALETTE_COLOR.opacity.dark.dark_40,
      dark_50: PALETTE_COLOR.opacity.dark.dark_50,
      dark_60: PALETTE_COLOR.opacity.dark.dark_60,
      dark_70: PALETTE_COLOR.opacity.dark.dark_70,
      dark_80: PALETTE_COLOR.opacity.dark.dark_80,
      dark_90: PALETTE_COLOR.opacity.dark.dark_90,
      dark_100: PALETTE_COLOR.opacity.dark.dark_100,
    },
    gradientColor: {
      gradient1: PALETTE_COLOR.gradientColor.gradient1,
      gradient2: PALETTE_COLOR.gradientColor.gradient2,
      gradient3: PALETTE_COLOR.gradientColor.gradient3,
      gradient4: PALETTE_COLOR.gradientColor.gradient4,
      gradient5: PALETTE_COLOR.gradientColor.gradient5,
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
    subtitle5: createTypographyProperties({
      fontFamily: sanProBold.style.fontFamily,
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.2,
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

    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          color: "#fff",
          padding: "9px 20px",
          borderRadius: "4px",
        },
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
