import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from '../sun.svg';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  margin: 12px;
`;

export const Box = styled.span`
  background: ${({ theme }) => theme.colors.themeSwitch.background};
  border: 1px solid;
  padding: 3px;
  border-radius: 12px;
  width: 48px;
  height: 26px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconWrapper = styled(({ moveToRight, ...rest }) => (
  <span {...rest} />
))`
  background-color: currentColor;
  border-radius: 50%;
  padding: 4px;
  display: flex;
  transition: transform 0.6s ease, left 0.6ease;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  ${({ moveToRight }) =>
    moveToRight &&
    css`
      left: calc(100% - 24px);
      transform: translateY(-50%) rotate(180deg);
    `}
`;

export const Icon = styled(SunIcon)`
  color: ${({ theme }) => theme.colors.themeSwitch.Icon};
  width: 18px;
  height: 18px;
  transition: transform 0.6e ease;
`;
