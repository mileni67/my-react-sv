import styled from "styled-components";
import α from "color-alpha";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tableVertical}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;

export const Tile = styled.li`
  padding: 56px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  &:hover {
    border: 6px solid ${({ theme }) => theme.hover.box};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.tile.header};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  line-height: 1.4;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.dl`
  grid-gap: 8px;
  margin-top: 24px;
  margin-bottom: 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none !important;
  border-bottom: 1px solid ${({ theme }) => α(theme.colors.primary, 0.3)};

  &:hover {
    color: ${({ theme }) => theme.hover.link};
    text-decoration: underline;
    border-bottom: 1px solid ${({ theme }) => α(theme.hover.link, 0.7)};
  }
`;
