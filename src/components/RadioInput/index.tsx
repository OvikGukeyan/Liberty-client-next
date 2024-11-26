import React, { FC } from 'react';
import styles from './RadioInput.module.scss';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    name: string,
    className?: string,
}
export const RadioInput: FC<Props> = ({ className, name, label, ...props }) => {
    const { register } = useFormContext();
    console.log(className);
    return (
        <label className={styles.radio_label}>
            {label && <span>{label}</span>}
            <input
                className={styles.radio}
                {...register(name)}
                {...props}
            />
        </label>

    )
}
