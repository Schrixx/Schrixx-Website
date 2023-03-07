import styled from "styled-components";

import { GrLinkedin } from "react-icons/gr";

import me from "../../Images/Me/ryooo.jpg";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`;

export const FrontEndContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 15px;
  padding: 1rem;
  padding-left: 1rem;
  padding-right: 26rem;
  box-shadow: 10px 10px 10px #10232a;

  p {
    color: ${({ theme }) => theme.textColor};
    margin: 0;
    margin-bottom: 0.5rem;
    max-width: 25ch;
  }
`;

export const MeImg = styled.div`
  position: absolute;
  top: 3.38rem;
  right: 6rem;
  background-image: url(${me});
  width: 250px;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 30%;
  box-shadow: 5px 10px 10px #10232a;
  z-index: 5;
`;

export const SocialWrapper = styled.a`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0;
  margin: 0;
  height: 17px;
  position: absolute;
  right: 2.6rem;
  bottom: 1.5rem;
  text-decoration: none;
  transform: scale(2);
`;

export const LinkedInIcon = styled(GrLinkedin)`
  color: #297187;
`;

export const Separator = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-right: 0.4rem;
  height: 1px;
  opacity: 20%;
  width: 55vw;
  background-color: black;
`;
