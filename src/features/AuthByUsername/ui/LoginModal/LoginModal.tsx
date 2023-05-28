import { classNames } from 'shered/lib/classNames/classNames';
import { Modal } from 'shered/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onclose: () => void;
}

export const LoginModal = ({ className, onclose, isOpen }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onclose}
        lazy
    >
        <LoginForm />
    </Modal>
);
