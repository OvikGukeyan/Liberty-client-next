import React from 'react';
import styles from './Button.module.scss';

interface ButtonTypes {
    children: string
    onClick: () => void
}

const Button: React.FC<ButtonTypes> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  )
}

export default Button