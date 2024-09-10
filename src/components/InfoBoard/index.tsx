import React, { FC } from 'react';
import styles from './InfoBoard.module.scss';
import Image from "next/image";

interface InfoBoardProps {
    condition: boolean
    text: string
    imgUrl: string
}

export const InfoBoard: FC<InfoBoardProps> = ({condition, text, imgUrl}) => {
  return (
    <div className={`${styles.overlay} ${condition ? styles.overlayVisible : ""}`}>
        <div className={styles.board}>
          <Image
            src={imgUrl}
            alt="submited"
            width={300}
            height={300}
          />
          <h1>
            {text}
          </h1>
        </div>
      </div>
)}
