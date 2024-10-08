import React, { FC } from 'react';
import styles from './Loader.module.scss';

interface LoaderPropsType {
    isLoading: boolean
}

export const Loader: FC<LoaderPropsType> = ({isLoading}) => {
  return (
    <div className={`${styles.overlay} ${isLoading ? styles.overlayVisible : ""}`}>
        <div className={styles.loader}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </div>
  )
}
