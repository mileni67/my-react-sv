export const colorNames = {
  Moonlight: "#FBFBFE",
  white: "#FFFFFF",
  mercury: "#e5e5e5",
  mineShaft: "#252525",
  doveGray: "#6D6D6D",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tableVertical: 991,
    tableHorizontal: 1999,
  },
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
