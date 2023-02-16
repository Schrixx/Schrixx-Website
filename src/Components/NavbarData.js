import React from "react";

// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as FiIcons from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { IoMdHelpCircle } from "react-icons/io";

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
