import { email } from "../email";
import { SocialIcon } from "./SocialIcon";
import {
  Address,
  EmailLink,
  EmailWrapper,
  LetsTalk,
  Paragraph,
  Wrapper,
} from "./styled";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let’s talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </EmailWrapper>
      <Paragraph>
        I'm always open to new projects whenever I have time. If you have&nbsp;
        a website, dashboard or a mobile app in mind and need some help to&nbsp;
        make your ideas come to life, feel free to contact me ✌️
      </Paragraph>
      <SocialIcon />
    </Address>
  </Wrapper>
);
