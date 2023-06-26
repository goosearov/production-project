import { classNames } from 'shered/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;

    iconTheme?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, iconTheme } = props;

    return (
        <Svg className={classNames(cls.Icon, { [cls.iconTheme]: iconTheme }, [className])} />
    );
});
