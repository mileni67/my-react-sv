import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../common/themeSlice";
import { themeDark, themeLight } from "./theme";
import { PersonalHomePage} from "../../features/personalHomePage";

export const App = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <PersonalHomePage/>
      <Normalize />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
