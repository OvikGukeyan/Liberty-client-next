import React, { FC } from 'react';
import styles from './Carousel.module.scss';
import { ChevronLeft } from 'lucide-react';

interface Props {
    onClick?: VoidFunction
}
export const CustomArrowLeft: FC<Props> = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.button_left}>
                    <ChevronLeft height={45} width={45} />

      </div>
    )
}
