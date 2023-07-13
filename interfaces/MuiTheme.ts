declare module "@mui/material/styles/createTypography" {
  interface Typography {
    netflixtitle1?: TypographyStyle;
    netflixtitle2?: TypographyStyle;
    netflixtitle3?: TypographyStyle;
    netflixtitle4?: TypographyStyle;
    netflixtitle5?: TypographyStyle;
    ryeTitle?: TypographyStyle;
    subtitle3?: TypographyStyle;
    subtitle4?: TypographyStyle;
    subtitle5?: TypographyStyle;
    subtitle6?: TypographyStyle;
  }

  interface TypographyOptions {
    netflixtitle1?: TypographyStyle;
    netflixtitle2?: TypographyStyle;
    netflixtitle3?: TypographyStyle;
    netflixtitle4?: TypographyStyle;
    netflixtitle5?: TypographyStyle;
    ryeTitle?: TypographyStyle;
    subtitle3?: TypographyStyle;
    subtitle4?: TypographyStyle;
    subtitle5?: TypographyStyle;
    subtitle6?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    netflixtitle1: true;
    netflixtitle2: true;
    netflixtitle3: true;
    netflixtitle4: true;
    netflixtitle5: true;
    ryeTitle: true;
    subtitle3: true;
    subtitle4: true;
    subtitle5: true;
    subtitle6: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    text_hover: {
      main: string;
    };
    opacity: {
      white_02: string;
      white_07: string;
      white_008: string;
      white_025: string;
      
      dark_10: string;
      dark_20: string;
      dark_30: string;
      dark_40: string;
      dark_50: string;
      dark_60: string;
      dark_70: string;
      dark_80: string;
      dark_90: string;
      dark_100: string;
    };
    gradientColor: {
      gradient1: string;
      gradient2: string;
      gradient3: string;
      gradient4: string;
      gradient5: string;
    };
  }

  interface PaletteOptions {
    text_hover: {
      main: string;
    };
    opacity: {
      white_02: string;
      white_07: string;
      white_008: string;
      white_025: string;
      dark_10: string;
      dark_20: string;
      dark_30: string;
      dark_40: string;
      dark_50: string;
      dark_60: string;
      dark_70: string;
      dark_80: string;
      dark_90: string;
      dark_100: string;
    };
    gradientColor: {
      gradient1: string;
      gradient2: string;
      gradient3: string;
      gradient4: string;
      gradient5: string;
    };
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    white: true;
  }
}

declare module "@mui/material/Select" {
  interface SelectClasses {
    root: string;
  }
}

export {};
