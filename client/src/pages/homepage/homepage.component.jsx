import React from "react";
import Menu from "../../Components/menu/menu.component";
import { HomePageContainer } from "./homepage.styling";
const HomePage = () => {
  return (
    //styling component
    <HomePageContainer>
      <Menu />
    </HomePageContainer>
  );
};

export default HomePage;
