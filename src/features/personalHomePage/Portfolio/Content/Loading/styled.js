import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "./spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 88px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: grid;
  justify-content: center;
`;

export const StyledSpinner = styled(Spinner)`
  margin-top: 48px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ theme }) => theme.colors.primary};
  height: auto;
`;
