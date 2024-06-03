import React from 'react';
import styles from './Button.module.scss';

interface ButtonTypes {
    children: string
    onClick: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonTypes> = ({children, onClick, disabled}) => {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button}>{children}</button>
  )
}

export default Button