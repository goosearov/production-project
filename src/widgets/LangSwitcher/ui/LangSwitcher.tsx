import {classNames} from "shered/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {Button, ThemeButton} from "shered/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (

            <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
                {t('язык')}
            </Button>

    );
};