import { classNames } from 'shered/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { useTranslation } from 'react-i18next';
import { Text } from 'shered/ui/Text/Text';
import { Button, ButtonTheme } from 'shered/ui/Button/Button';
import { Input } from 'shered/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('профиль')} />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t('редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Имя')}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                />
            </div>
        </div>
    );
};
