import { classNames } from 'shered/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}
interface TextProps {
    className?: string;
    title?: string
    text?: string
    theme?: TextTheme
    position?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        position = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[position]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
