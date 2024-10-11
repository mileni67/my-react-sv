import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;
`;

export const LetsTalk = styled.h2`
  color: ${({ theme }) => theme.colors.headerPrefix};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;
`;

export const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 900;
  font-size: 32px;
  text-decoration: none;
  transition: color 0.3s;
`;

export const Paragraph = styled.p`
  max-width: 670px;
  font-size: 18px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;
