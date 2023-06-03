import { classNames } from 'shered/lib/classNames/classNames';
import { Modal } from 'shered/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shered/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onclose: () => void;
}

export const LoginModal = ({ className, onclose, isOpen }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onclose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onclose} />
        </Suspense>
    </Modal>
);
