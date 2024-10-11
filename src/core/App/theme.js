export const colorNames = {
  Moonlight: "#FBFBFE",
  white: "#FFFFFF",
  mercury: "#e5e5e5",
  mineShaft: "#252525",
  doveGray: "#6D6D6D",
  ultramarineBlue: "#0366D6",
  frostedGray: "#D1D5DA4D",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  anakiwa: "#8CC2FF",
  hazyGray: "#F2F3F4",
  slateGray: "#6E7E91",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tableVertical: 991,
    tableHorizontal: 1999,
  },
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.ultramarineBlue,
    textPrimary: colorNames.mineShaft,

    site: {
      background: colorNames.Moonlight,
      text: colorNames.slateGray,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
    boxBackground: colorNames.white,
    tile: {
      border: colorNames.hazyGray,
      header: colorNames.ultramarineBlue,
    },
    headerPrefix: colorNames.slateGray,
    headerLine: colorNames.frostedGray,
  },
};

export const themeDark = {
  ...common,
  colors: {
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
    headerPrefix: colorNames.slateGray,
  },
};
