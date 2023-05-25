import React from 'react';
import { classNames } from 'shered/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shered/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            /
        </div>
    </div>
);
