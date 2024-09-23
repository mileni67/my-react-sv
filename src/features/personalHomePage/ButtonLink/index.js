import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 600;
  border: solid ${({ theme }) => theme.colors.ButtonLink.border};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  background: ${({ theme }) => theme.colors.primary};
  transition: box-shadow 0.3s;
`;
