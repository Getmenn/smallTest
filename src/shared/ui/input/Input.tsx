import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'handleChange'>

export interface IProps extends HTMLInputProps{
    value?: string | number;
    type?: string
    className?: string;
    handleChange?: (value: string) => void;
}

export const Input = ({ value, type = 'text', className, handleChange, ...otherProps }: IProps) => {
    return (
        <input
            type={type}
            className={`${s.input} ${className || ''}`}
            value={value}
            onChange={(e) => handleChange?.(e.target.value)}
            {...otherProps}
        />
    );
};
