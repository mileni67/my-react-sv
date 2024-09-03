import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { themeDark, themeLight } from "./theme";
import { ThemeSwitch } from "../../common/ThemeSwitch";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <ThemeSwitch />
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
