import React from 'react';
import styles from './InfoBoard.module.scss';
import Image from "next/image";

interface InfoBoardProps {
    condition: boolean
    text: string
}

export const InfoBoard: React.FC<InfoBoardProps> = ({condition, text}) => {
  return (
    <div className={`${styles.overlay} ${condition ? styles.overlayVisible : ""}`}>
        <div className={styles.board}>
          <Image
            src={"/assets/submited.png"}
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
