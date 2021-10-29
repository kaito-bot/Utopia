import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    font-weight: 700;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 2px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: rgba(66, 133, 244, 0.9);

  &:hover {
    background-color: rgba(66, 133, 244, 1);
    font-weight: 700;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.div`
  padding: 15px 10px;
  width: 12rem;
  height: 50px;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Dosis", sans-serif;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  ${getButtonStyles}
`;
