import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shered/config/routeConfig/routeConfig';
import MainIcon from 'shered/assets/icons/home.svg';
import AboutIcon from 'shered/assets/icons/about.svg';
import ProfileIcon from 'shered/assets/icons/profile.svg';
import ArticlesIcon from 'shered/assets/icons/articles.svg';

import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
