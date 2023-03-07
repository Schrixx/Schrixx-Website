import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 30vw;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.backgroundColor};
  box-shadow: 8px 10px 10px #10232a;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: 2px solid #294f5d;
  border-radius: 15px 15px 0 0;

  width: 100%;

  h1 {
    color: ${({ theme }) => theme.textColor};
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const IconWrapper = styled.div`
  position: relative;
  border-radius: 10px;
  // make height/width === icon height/width
  height: 50px;
  width: 50px;
  margin-right: 1rem;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

// Try a width transition
export const Tooltip = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.backgroundColor};
  text-align: center;
  border-radius: 5px;
  position: absolute;
  padding: 5px 0;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.5s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.textColor} transparent transparent
      transparent;
  }
`;
