import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  text-decoration: none;
  color: black;
  padding: 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
