import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopIcon } from "./envelope.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Avatar = styled.img`
  max-width: 384px;
  border-radius: 50%;
  width: 30vw;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const ThisIs = styled.div`
  color: ${({ theme }) => theme.colors.headerPrefix};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.headerPrefix};
  font-size: 20px;
  font-weight: 400;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const StyledButtonLink = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-top: 24px;
  }
`;

export const ButtonIcon = styled(EnvelopIcon)`
  margin-right: 16px;
`;
