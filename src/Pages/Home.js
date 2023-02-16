// react
import React from "react";

// components
import Navbar from "../Components/Navbar";

// styled components
import {
  FrontEndContainer,
  MeImg,
  InfoContainer,
  Separator,
  LinkedInIcon,
  SocialWrapper,
} from "../Styles/HomeStyled";
import { FooterContainer } from "../Styles/PortfolioStyled";
import {
  SkillsContainer,
  HeaderWrapper,
  IconContainer,
  IconWrapper,
  Tooltip,
} from "../Styles/SkillsStyled";

//Icons
import ReactIcon from "../Images/Icons/ReactIcon";
import StyledComponentsIcon from "../Images/Icons/StyledComponentsIcon";
import JavascriptIcon from "../Images/Icons/JavascriptIcon";

export default function Home() {
  return (
    <>
      <Navbar />

      <InfoContainer>
        <FrontEndContainer>
          <p style={{ fontSize: "20px", maxWidth: "46ch", color: "#1c1c1c" }}>
            Hello, I'm Moses. Based in Tucson, Arizona 🌵.
          </p>
          <p style={{ fontSize: "36px", color: "#1c1c1c" }}>
            As a{" "}
            <span style={{ fontSize: "40px", color: "#71bbd1" }}>
              Front-End Developer
            </span>
            {", "}I do my best to create responsive, user-friendly experiences
            while maintaining a visually pleasing aesthetic.
          </p>
          <p style={{ marginBottom: "0", maxWidth: "56ch", color: "#1c1c1c" }}>
            I'm always willing to take user criticism and feedback in order to
            improve myself and my work.
          </p>
          <MeImg></MeImg>
          <SocialWrapper
            href="https://www.linkedin.com/in/moses-osuna-a7501b9a/"
            target="_blank"
          >
            <LinkedInIcon />
          </SocialWrapper>
        </FrontEndContainer>
        <Separator></Separator>
        <SkillsContainer>
          <HeaderWrapper>
            <h1>My Toolkit</h1>
          </HeaderWrapper>

          <IconContainer>
            <IconWrapper>
              <Tooltip>Javascript</Tooltip>
              <JavascriptIcon />
            </IconWrapper>

            <IconWrapper>
              <Tooltip>ReactJS</Tooltip>
              <ReactIcon />
            </IconWrapper>

            <IconWrapper style={{ marginRight: "0" }}>
              <Tooltip>Styled Components</Tooltip>
              <StyledComponentsIcon />
            </IconWrapper>
          </IconContainer>
        </SkillsContainer>
      </InfoContainer>

      <FooterContainer>
        <h1>Hi</h1>
      </FooterContainer>
    </>
  );
}
