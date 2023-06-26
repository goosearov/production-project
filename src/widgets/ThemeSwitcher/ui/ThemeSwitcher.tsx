import { classNames } from 'shered/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

import LightIcon from 'shered/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shered/ui/Button/Button';
import { memo } from 'react';
import { Icon } from 'shered/ui/Icon/Icon';

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
            {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
            <Icon Svg={LightIcon} iconTheme />
        </Button>
    );
});
