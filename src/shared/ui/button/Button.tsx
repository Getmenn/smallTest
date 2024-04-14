import { ButtonHTMLAttributes, memo, MouseEvent, ReactNode } from 'react';

import s from './Button.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string | ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset'
}

export const Button = memo(({
    children,
    disabled = false,
    onClick,
    className,
    type = 'button',
    ...otherProps
}: IProps) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.stopPropagation();
        onClick?.();
    };
    return (
        <button
            className={`${s.button} ${className || ''}`}
            disabled={disabled}
            onClick={(e) => handleClick(e)}
            type={type}
            {...otherProps}
        >
            {children}
        </button>
    );
});
