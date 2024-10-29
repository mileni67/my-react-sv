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
      <Text>
        👨🏻‍💻 I’m an enthusiastic Frontend Developer with a deep passion for React,
        eager to explore new practices and develop my skills. I’m on the hunt
        for exciting career opportunities that allow me to grow and innovate.
      </Text>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
      </StyledButtonLink>
    </div>
  </Wrapper>
);
