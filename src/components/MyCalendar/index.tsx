"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MyCalendar.module.scss";
import Button from "../Button";
import { useRouter } from "next/navigation";
import $api from "@/http";
import BookingService from "@/services/bookingService";
import { Booking } from "@/models/Booking";

interface MyCalendarTypes {
    item: {
        name: string;
        description: string;
        img: string;
        id: number;
    };
}

const MyCalendar: React.FC<MyCalendarTypes> = ({ item }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedHours, setSelectedHours] = useState<string[]>([]);
    const [bookings, setBookings] = useState<Booking[] | null>(null)

    const hours = [
        {
            value: '7:00',
            booked: false
        },
        {
            value: '8:00',
            booked: false
        },
        {
            value: '9:00',
            booked: false
        },
        {
            value: '10:00',
            booked: false
        },
        {
            value: '11:00',
            booked: false
        },
        {
            value: '12:00',
            booked: false
        },
        {
            value: '13:00',
            booked: false
        },
        {
            value: '14:00',
            booked: false
        },
        {
            value: '15:00',
            booked: false
        },
        {
            value: '16:00',
            booked: false
        },
        {
            value: '17:00',
            booked: false
        },
        {
            value: '18:00',
            booked: false
        },
        {
            value: '19:00',
            booked: false
        },
        {
            value: '20:00',
            booked: false
        },
        {
            value: '21:00',
            booked: false
        },
    ]

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await BookingService.fetchBookings()
            setBookings(data)
        }
        fetchData();
        checkBookings();

    }, []);

    const checkBookings = () => {
        const formatedSelectedDate = selectedDate && selectedDate.toISOString().split('T')[0];
        const res = bookings?.find(booking => {
            const bookingDate = new Date(booking.date);
            return bookingDate.toISOString().split('T')[0] === formatedSelectedDate && booking.room === item.id + "";
        });

        res?.hours.forEach(hour => {
            const ind = hours.findIndex(item => item.value === hour)
            if (ind >= 0) {
                hours[ind].booked = true
            }
        })
    }

    const handleTimeClick = (time: string) => {
        if (selectedHours.includes(time)) {
            const newList = selectedHours.filter(item => item !== time)
            setSelectedHours(newList)
        } else {
            setSelectedHours(prev => [...prev, time])
        }
    }
    const router = useRouter();

    const handleSubmitClick = () => {
        const dateString = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
        localStorage.setItem('selectedDate', dateString);
        localStorage.setItem('selectedHours', JSON.stringify(selectedHours));
        localStorage.setItem('room', JSON.stringify(item));


        router.push('/checkout');
        document.body.style.overflow = "";
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
                    {hours.map((item, ind) => <button disabled={item.booked === true} key={ind} onClick={() => handleTimeClick(item.value)} className={`${styles.time} ${selectedHours.includes(item.value) && styles.activeTime} `}>{item.value}</button>)}
                </div>
            </div>
            <Button onClick={handleSubmitClick}>Submit</Button>
        </div>

    );
};

export default MyCalendar;
