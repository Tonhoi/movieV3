declare module "@mui/material/styles/createTypography" {
  interface Typography {
    netflixtitle1?: TypographyStyle;
    netflixtitle2?: TypographyStyle;
    netflixtitle3?: TypographyStyle;
    netflixtitle4?: TypographyStyle;
    netflixtitle5?: TypographyStyle;
    subtitle3s?: TypographyStyle;
  }

  interface TypographyOptions {
    netflixtitle1?: TypographyStyle;
    netflixtitle2?: TypographyStyle;
    netflixtitle3?: TypographyStyle;
    netflixtitle4?: TypographyStyle;
    netflixtitle5?: TypographyStyle;
    subtitle3?: TypographyStyle;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    netflixtitle1: true;
    netflixtitle2: true;
    netflixtitle3: true;
    netflixtitle4: true;
    netflixtitle5: true;
    subtitle3: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    //     brandColor: {
    //       blue: string;
    //       orange: string;
    //     };
    //     secondaryColor: {
    //       lightBlue: string;
    //       darkBlue: string;
    //       background: string;
    //     };
    //     gradientColor: {
    //       gradientOrange: string;
    //       gradientBlue: string;
    //       gradientBlue30: string;
    //       gradientWhite50: string;
    //     };
    //   }
    //   interface PaletteOptions {
    //     brandColor: {
    //       blue: string;
    //       orange: string;
    //     };
    //     secondaryColor: {
    //       lightBlue: string;
    //       darkBlue: string;
    //       background: string;
    //     };
    //     gradientColor: {
    //       gradientOrange: string;
    //       gradientBlue: string;
    //       gradientBlue30: string;
    //       gradientWhite50: string;
    //     };
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
