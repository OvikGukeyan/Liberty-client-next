import React from 'react';
import styles from './Button.module.scss';

interface ButtonTypes {
    children: string
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset" | undefined
    className: 'pink_button' | 'black_button'

}

const Button: React.FC<ButtonTypes> = ({children, onClick, disabled, type, className}) => {
  return (
    <button type={type ? type : "button"} disabled={disabled} onClick={onClick} className={styles[className]}>{children}</button>
  )
}

export default Button