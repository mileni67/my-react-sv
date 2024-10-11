import { email } from "../email";
import OleksandrVykhorProfile from "./profile.jpg";
import {
  Avatar,
  ButtonIcon,
  Name,
  StyledButtonLink,
  Text,
  ThisIs,
  Wrapper,
} from "./styled";

export const MainInforamation = () => (
  <Wrapper>
    <Avatar src={OleksandrVykhorProfile} alt="Oleksandr Vykhor" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Oleksandr Vykhor</Name>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
      <Text>
        👨🏻‍💻 Passionate Frontend Developer | React Enthusiast | Open to New
        Adventures 🚀
      </Text>
    </div>
  </Wrapper>
);
