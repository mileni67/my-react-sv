import styled from "styled-components";
import { ReactComponent as BulletImage } from "./bullet.svg";
import { SubHeader } from "../SubHeader";



export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.boxBackground};
  padding: 32px;
  margin-top: 72px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiursSmall};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin-top: 32px;
  grid-gap: 8px 32px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  line-height: 1.4;
`;

export const Bullet = styled(BulletImage)`
  color: ${({ theme }) => theme.colors.ultramarineBlue};
  margin-right: 16px;
  height: auto;
`;

export const StyledHeader = styled(SubHeader)`
  padding-bottom: 13px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.frostedGray};
`;
