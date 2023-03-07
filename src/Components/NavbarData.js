import React from "react";

// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as FiIcons from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";

export const ThemeData = {
  dark: {
    backgroundColor: "#1c1c1c",
    textColor: "#daded4",
    pageBackgroundColor: "#454545",
    flex: "flex-end",
    switchColor: "#daded4",
  },
  light: {
    backgroundColor: "#fff",
    textColor: "#1c1c1c",
    pageBackgroundColor: "#daded4",
    flex: "flex-start",
    switchColor: "#000",
  },
};

export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <FiBookOpen />,
  },
  {
    title: "About Me",
    path: "/about",
    icon: <IoMdHelpCircle />,
  },
];
