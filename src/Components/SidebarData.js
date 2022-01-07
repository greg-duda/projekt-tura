import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";

export const SidebarData = [
    {
        title: "Home",
        icon: <AiOutlineHome />,
        link: "/home"
    },
    {
        title: "Info",
        icon: <GrContactInfo />,
        link: "/info"
    },
    {
        title: "Settings",
        icon: <FiSettings />,
        link: "/settings"
    },
    {
        title: "Logout",
        icon: <GrLogout />,
        link: "/loggedOut"
    },
]