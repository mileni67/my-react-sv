import { createSlice } from "@reduxjs/toolkit";

const loadInitialTheme = () => {
  const savedTheme = localStorage.getItem("isDarkTheme");
  return savedTheme ? JSON.parse(savedTheme) : true;
};

const themeSlice = createSlice({
  name: "theme",

  initialState: {
    isDarkTheme: loadInitialTheme(),
  },

  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;

      localStorage.setItem("isDarkTheme", JSON.stringify(state.isDarkTheme));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

const selectThemeState = (state) => state.theme;
export const selectIsDarkTheme = (state) => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;
