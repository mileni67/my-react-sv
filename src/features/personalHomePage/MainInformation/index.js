import OleksandrVykhorProfile from "./profile.jpg";
import { Avatar, Name, Text, ThisIs, Wrapper } from "./styled";

export const MainInforamation = () => (
  <Wrapper>
    <Avatar src={OleksandrVykhorProfile} alt="Oleksandr Vykhor" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Oleksandr Vykhor</Name>
      <Text>
        I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Text>
    </div>
  </Wrapper>
);
