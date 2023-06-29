import { classNames } from 'shered/lib/classNames/classNames';
import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { Button, ButtonTheme } from 'shered/ui/Button/Button';
import CopyIcon from '../../assets/icons/copyIcon.svg';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const [copy, setCopy] = useState(false);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        setCopy(true);
        setTimeout(() => setCopy(false), 1000);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                {!copy
                    ? <CopyIcon className={cls.copyIcon} />

                    : 'copied!'}
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
