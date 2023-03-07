import { NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  margin: 0;
  background-color: #1c1c1c;

  ul {
    display: flex;
    list-style: none;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
    padding-left: 0;
  }
`;

export const Bars = styled(FaBars)`
  cursor: pointer;
  transform: scale(1.2);
  color: #daded4;
  margin: 1.5rem;
  margin-right: 0;
  margin-bottom: 0;

  &:hover {
    color: #294f5d;
  }
`;

// export const BarsBackground = styled.div`
//   margin: 1.3rem;
//   margin-right: 0;
//   height: 19.21px;

//   &:hover {
//     background-color: #454545;
//   }
// `;

export const Close = styled(IoClose)`
  position: absolute;
  transform: scale(2);
  top: 10px;
  right: 10px;
  color: #daded4;
  cursor: pointer;

  &:hover {
    transform: scale(2.5);
  }
`;

export const NavbarNavLink = styled(Link)`
  text-decoration: none;
  color: #daded4;
  font-size: 16px;
  padding: 1.3rem 1rem 1.3rem;
  transition: 850ms;

  &:hover {
    background-color: #294f5d;
    color: #daded4;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SidebarNavLink = styled(Link)`
  text-decoration: none;
  color: #daded4;
  font-size: 18px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: 850ms;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #294f5d;
    color: #daded4;
  }
`;

export const SidebarWrapper = styled.nav`
  display: flex;
  width: 252px;
  flex-shrink: 0;
  height: 100vh;
  left: ${({ variant }) => (variant ? "-100%" : "0")};
  top: 0;
  position: fixed;
  background-color: #181818;
  border-radius: 10px;
  transition: 850ms;
  z-index: 5;

  ul {
    width: 100%;
    padding-left: 0;
    margin-top: 50px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 12px 0px 0px 16px;
    list-style: none;
    height: 45px;

    span {
      margin-left: 16px;
    }
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.flex};
  /* justify-content: flex-end; */
  width: 2rem;
  height: 1rem;
  margin: 1.5rem;
  margin-left: 0;
  margin-bottom: 0;
  background-color: ${({ theme }) => theme.switchColor};
  border-radius: 20px;
  transition: background-color 0.5s;
`;

export const Circle = styled.button`
  background-color: #3b3b3b;
  border: 0;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  transform: scale(1.2);
  cursor: pointer;

  &:hover {
    background-color: #4b4b4b;
  }
`;
