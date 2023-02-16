import { NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 0;
  margin: 0;
  background-color: #1c1c1c;

  ul {
    display: flex;
    list-style: none;
    margin-top: 1.3rem;
    margin-bottom: 1.3rem;
  }
`;

export const Bars = styled(FaBars)`
  cursor: pointer;
  transform: scale(1.2);
  color: #daded4;

  &:hover {
    color: #fff;
  }
`;

export const BarsBackground = styled.div`
  position: absolute;
  left: 16px;
  top: 18px;
  padding: 5px 5px 2px 5px;
  border-radius: 10px;

  &:hover {
    background-color: #454545;
  }
`;

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
  /* padding: 8px 8px; */
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
