import { NavLink as Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 0px;
  margin-bottom: 40px;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding: 7px;
  }
`;

export const Bars = styled(FaBars)`
  color: #000;
  cursor: pointer;
  transform: scale(1.2);
  color: #3c403d;

  &:hover {
    color: #fff;
  }
`;

export const BarsBackground = styled.div`
  position: absolute;
  left: 10px;
  top: 20px;
  padding: 5px 5px 2px 5px;
  border-radius: 10px;

  &:hover {
    background-color: #39603d;
  }
`;

export const Close = styled(IoClose)`
  position: absolute;
  transform: scale(2);
  top: 10px;
  right: 10px;
  color: #000;
  cursor: pointer;

  &:hover {
    transform: scale(2.5);
  }
`;

export const NavbarNavLink = styled(Link)`
  text-decoration: none;
  color: #3c403d;
  font-size: 18px;
  padding: 8px 8px;
  transition: 850ms;
  border-color: #39603d;
  border-radius: 4px;

  &:hover {
    background-color: #39603d;
    color: #daded4;
  }
`;

export const SidebarNavLink = styled(Link)`
  text-decoration: none;
  color: #151414;
  font-size: 18px;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #000;
    color: #daded4;
  }
`;

export const SidebarContainer = styled.nav`
  display: flex;
  width: 250px;
  flex-shrink: 0;
  height: 100vh;
  left: ${({ variant }) => (variant ? "-100%" : "0")};
  top: 0;
  position: fixed;
  background-color: #268348;
  border: 2px solid #268348;
  border-radius: 10px;
  transition: 850ms;

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
