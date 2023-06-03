import { classNames } from 'shered/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shered/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (

        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t(short ? 'короткий язык' : 'язык')}
        </Button>

    );
});
