import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionContainerStyles = css`
  text-decoration: none;
  color: black;
  padding: 15px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    height: 70px;
    position: fixed;
    background-color: white;
    z-index: 3;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    padding: 0px;
    display: flex;
    align-items: center;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
