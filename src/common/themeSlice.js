import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    tooggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { tooggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;

export const selectIsDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
