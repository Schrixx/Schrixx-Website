// react
import React from "react";

// components
import Navbar from "../Components/Navbar";
import {
  InfoContainer,
  GeneralContainer,
  HobbiesContainer,
  Line1,
  FooterContainer,
} from "../Styles/HomeStyled";

export default function Home() {
  return (
    <>
      <Navbar />

      <InfoContainer>
        <GeneralContainer>
          <h1>General</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat enim eget metus pellentesque consectetur et a felis. Donec
            sollicitudin enim id imperdiet feugiat. Etiam a vehicula elit.
            Praesent eros dolor, auctor et ultrices nec, hendrerit nec lacus.
            Donec sollicitudin pulvinar dictum. Nulla facilisi. Vivamus quis
            metus lobortis, varius felis et, ullamcorper orci. Maecenas blandit
            massa interdum, pulvinar felis venenatis, volutpat ligula.
          </p>
        </GeneralContainer>
        <Line1></Line1>
        <HobbiesContainer>
          <h1>Hobbies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat enim eget metus pellentesque consectetur et a felis. Donec
            sollicitudin enim id imperdiet feugiat. Etiam a vehicula elit.
            Praesent eros dolor, auctor et ultrices nec, hendrerit nec lacus.
            Donec sollicitudin pulvinar dictum. Nulla facilisi. Vivamus quis
            metus lobortis, varius felis et, ullamcorper orci. Maecenas blandit
            massa interdum, pulvinar felis venenatis, volutpat ligula.
          </p>
        </HobbiesContainer>
      </InfoContainer>

      <FooterContainer>
        <h1>Hi</h1>
      </FooterContainer>
    </>
  );
}
