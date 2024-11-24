import React, { FC } from 'react';
import styles from './Carousel.module.scss';
import { ChevronRight } from 'lucide-react';


interface Props {
    onClick?: VoidFunction
}
export const CustomArrowRiht: FC<Props> = ({ onClick }) => {
    return (
        <div onClick={onClick} className={styles.button_right}>
            <ChevronRight height={45} width={45} />
        </div>

    )
}
