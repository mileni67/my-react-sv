import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  place-items: center;
  min-height: 100vh;
`;

export const StyledSpinner = styled(Spinner)`
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  width: 160px;
  height: 160px;
  margin-top: 48px;
`;
