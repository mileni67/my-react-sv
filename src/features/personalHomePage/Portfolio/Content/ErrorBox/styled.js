import styled from "styled-components";

export const Wrapper = styled.article`
  margin-top: 96px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Header = styled.header`
  font-weight: 700;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.4;
`;
