import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { MdPeople } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Summary",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Categories",
    path: "/category",
    icon: <GiClothes />,
    cName: "nav-text",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <MdPeople />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
