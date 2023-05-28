import { classNames } from 'shered/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shered/ui/Button/Button';
import { Input } from 'shered/ui/Input/Input';
import { useState } from 'react';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    console.log(value);
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                value={value}
                onChange={onChange}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                value={value}
                onChange={onChange}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
