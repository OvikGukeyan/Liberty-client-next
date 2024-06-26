"use client";
import React, { useRef, useState } from "react";
import styles from "./CoworkingZone.module.scss";
import Button from "../Button";
import MyCalendar from "@/components/MyCalendar";
import { Room } from "@/app/checkout/page";
import BookingOptions from "../BookingOptions";



interface CoworkingZoneTypes {
    item: Room
}

const CoworkingZone: React.FC<CoworkingZoneTypes> = ({ item }) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const calendarRef = useRef<HTMLDivElement>(null)

    const handleBookingClick = () => {
        setIsCalendarOpen(true);
        document.body.style.overflow = "hidden";
    };

    const handleOutsideClick = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (calendarRef.current) {
            if (!calendarRef.current.contains(e.target as Node)) {
                setIsCalendarOpen(false);
                document.body.style.overflow = "";
            }
        }
    };

    return (
        <div className={styles.zone}>
            <div className={styles.about}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className={styles.button_boix}>
                    <Button onClick={handleBookingClick}>Buchen</Button>
                </div>
            </div>
            <div className={styles[item.img]}></div>
            {
                isCalendarOpen &&
                <div onClick={(e) => handleOutsideClick(e)} className={`${styles.overlay} ${isCalendarOpen && styles.overlayVisible}`}>
                    <div ref={calendarRef}>
                        <BookingOptions room={item}/>
                    </div>
                </div>
            }

        </div>
    );
};

export default CoworkingZone;
