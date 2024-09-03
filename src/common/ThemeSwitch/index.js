import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toogleTheme } from "../themeSlice";
import { Box, Button, Icon, IconWrapper, Text, Wrapper } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispach = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispach(toogleTheme())}>
        <Text>Dark Mode{isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
