import {classNames} from "shered/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {Theme, useTheme} from "app/providers/ThemeProvider";

import LightIcon from 'shered/assets/icons/theme-light.svg'
import DarcIcon from 'shered/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from "shered/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarcIcon /> : <LightIcon />}
        </Button>
    );
};