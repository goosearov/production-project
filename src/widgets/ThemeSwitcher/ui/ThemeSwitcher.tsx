import { classNames } from 'shered/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import LightIcon from 'shered/assets/icons/theme-light.svg';
import DarkIcon from 'shered/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shered/ui/Button/Button';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
