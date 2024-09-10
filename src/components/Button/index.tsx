import React, { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface ButtonTypes {
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset" | undefined
    className: 'pink_button' | 'black_button' | 'go_back'

}

export const Button: FC<PropsWithChildren<ButtonTypes>> = ({children, onClick, disabled, type, className}) => {
  return (
    <button type={type ? type : "button"} disabled={disabled} onClick={onClick} className={styles[className]}>{children}</button>
  )
}
