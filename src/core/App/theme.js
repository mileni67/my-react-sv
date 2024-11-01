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
  semiDark: "#4B4B4B",
  lightGrey: "#D3D3D3",
  semiGrey: "rgba(209, 213, 218, 0.1)",
  skyBlue: "rgba(33, 136, 255, 1)",
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
      hoverBackground: "rgba(3, 102, 214, 0.8)",
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
    primary: colorNames.skyBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.semiGrey,
      shadow: colorNames.anakiwa,
      hoverBackground: "rgba(3, 102, 214, 0.8)",
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
    boxBackground: colorNames.semiDark,
    tile: {
      border: colorNames.semiGrey,
      header: colorNames.white,
    },
    headerPrefix: colorNames.white,
    headerLine: colorNames.lightGrey,
  },
};
