"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MyCalendar.module.scss";
import Button from "../Button";

interface MyCalendarTypes {
    item: {
        name: string;
        description: string;
        img: string;
        id: number;
    };
}

const MyCalendar: React.FC<MyCalendarTypes> = ({item}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedHours, setSelectedHours] = useState<string[]>([]);

    const times = [...Array(15)].map((_, ind) => ind + 7 + ':00');

    const handleTimeClick = (time: string) => {
        if (selectedHours.includes(time)) {
            const newList = selectedHours.filter(item => item !== time)
            setSelectedHours(newList)
        } else {
            setSelectedHours(prev => [...prev, time])
        }
    }


    


    return (
        <div className={styles.myCalendarContainer}>
            <h2>Wählen Sie Datum und Uhrzeit aus</h2>
            <div className={styles.picker}>
                <div className={styles.calendar_wrapper}>
                    <DatePicker
                        calendarClassName={styles.calendar}
                        selected={selectedDate}
                        onChange={(date: Date | null) => setSelectedDate(date)}
                        minDate={new Date()} 
                        dateFormat="MMMM d, yyyy"
                        inline
                    />
                </div>
                <div className={styles.time_wrapper}>
                    {times.map(item => <div onClick={() => handleTimeClick(item)} className={`${styles.time} ${selectedHours.includes(item) && styles.activeTime}`}>{item}</div>)}
                </div>
            </div>
            <Button onClick={() => { console.log({date: selectedDate, hours: selectedHours, item: item.id}) }}>Submit</Button>
        </div>

    );
};

export default MyCalendar;
