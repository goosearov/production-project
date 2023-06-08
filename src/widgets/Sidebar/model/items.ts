import React from 'react';
import { RoutePath } from 'shered/config/routeConfig/routeConfig';
import AboutIcon from 'shered/assets/icons/about.svg';
import MainIcon from 'shered/assets/icons/home.svg';
import ProfileIcon from 'shered/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'о нас',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'профиль',
        authOnly: true,
    },
];
