import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styling";

const WithSpinner = (WrappedComponent) => {
  //isLoading prop from container component
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
