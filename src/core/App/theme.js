export const colorNames = {
  Moonlight: "#FBFBFE",
  white: "#FFFFFF",
  mercury: "#e5e5e5",
  mineShaft: "#252525",
  doveGray: "#6D6D6D",
  ultramarineBlue: "#0366D6",
  frostedGray: "#D1D5DA4D",
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
    primary: {
      textPrimary: colorNames.mineShaft,
    },
    site: {
      background: colorNames.Moonlight,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
    boxBackground: colorNames.white,
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
  },
};
