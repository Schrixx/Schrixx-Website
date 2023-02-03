import React, { useState } from "react";

import { NavData } from "./NavbarData";

import { IconContext } from "react-icons";

import {
  Bars,
  Close,
  NavContainer,
  SidebarNavLink,
  NavbarNavLink,
  SidebarContainer,
  BarsBackground,
} from "../Styles/NavbarStyled";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const manageSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <NavContainer>
        <BarsBackground>
          <Bars onClick={manageSidebar} />
        </BarsBackground>
        <ul>
          {NavData.map((item, index) => {
            return (
              <li key={index}>
                <NavbarNavLink to={item.path}>
                  <span>{item.title}</span>
                </NavbarNavLink>
              </li>
            );
          })}
        </ul>
      </NavContainer>
      <IconContext.Provider value={{ color: "undefined" }}>
        <SidebarContainer variant={sidebar ? false : true}>
          <Close onClick={manageSidebar} />
          <ul>
            {NavData.map((item, index) => {
              return (
                <li key={index}>
                  <SidebarNavLink to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarNavLink>
                </li>
              );
            })}
          </ul>
        </SidebarContainer>
      </IconContext.Provider>
    </>
  );
}
