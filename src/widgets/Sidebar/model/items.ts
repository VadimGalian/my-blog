import React from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import AboutIcon from "shared/assets/icons/about-20-20.svg"
import MainIcon from "shared/assets/icons/main-20-20.svg"
import ProfileIcon from "shared/assets/icons/profileIcon.svg"

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: "Main Page",
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: "About Page",
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: "Profile Page",
        Icon: ProfileIcon,
    },
]
