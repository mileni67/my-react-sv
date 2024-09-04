import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;
`;

export const Avatar = styled.img`
  max-width: 384px;
  border-radius: 50%;
  width: 30vw;
`;

export const ThisIs = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
