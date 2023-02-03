// react
import React from "react";

// components
import Navbar from "../Components/Navbar";
import {
  InfoContainer,
  AboutMeText,
  General,
  Hobbies,
} from "../Styles/HomeStyled";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboutMeText>About me</AboutMeText>
      <InfoContainer>
        <General></General>
        <Hobbies></Hobbies>
      </InfoContainer>
    </>
  );
}
