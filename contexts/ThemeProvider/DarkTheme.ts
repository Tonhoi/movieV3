import { PALETTE_COLOR } from "@/configuration";
import { createTheme } from "@mui/material";
import { ThemeCommon } from "./ThemeCommon";

export const darkTheme = createTheme({
  ...ThemeCommon,

  palette: {
    mode: "dark",
    primary: {
      main: "#111319",
    },
    secondary: {
      main: "#1a1c22",
    },
    common: {
      white: "#000",
      black: "#fff",
    },

    text_color: {
      main: "#ECECEC",
      hover: "rgb(28, 199, 73)",
    },

    bg_color: {
      main: "#0a0c0f",
    },
    text: {
      primary: "#3B3D3F",
      secondary: "#1a1c22",
    },

    grey: {},

    error: {
      main: "#F44336",
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
});
