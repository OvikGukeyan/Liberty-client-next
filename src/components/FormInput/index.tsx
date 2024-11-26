'use client'

import React, { FC } from 'react';
import styles from './FormInput.module.scss';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    name: string,
    className?: string,
}
export const FormInput: FC<Props> = ({ className, name, label, ...props }) => {
    const { register, formState: { errors } } = useFormContext();
    console.log(className);
    const errorText = errors[name]?.message?.toString() as string;
    return (
        <label className={`${styles.label} ${className && styles[className]}`}>
            {label && <span>{label}:</span>}
            {errorText && (
                <p>{errorText || "Wrong format!"}</p>
            )}
            <input
                className={`${errorText && styles.input_error} ${styles.input
                    }`}
                {...register(name)}
                {...props}
            />
        </label>
    )
}
