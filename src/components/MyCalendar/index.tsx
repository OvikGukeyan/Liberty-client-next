"use client";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./MyCalendar.module.scss";
import Button from "../Button";
import { useRouter } from "next/navigation";
import BookingService from "@/services/bookingService";
import { useQuery } from "@tanstack/react-query";
import { Room } from "@/app/checkout/page";

interface MyCalendarTypes {
    item: Room;
}

const MyCalendar: React.FC<MyCalendarTypes> = ({ item }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedHours, setSelectedHours] = useState<number[]>([]);
    const [startHour, setStartHour] = useState<number | null>(null);
    const [endHour, setEndHour] = useState<number | null>(null);
    const [hours, setHours] = useState([
        { value: 7, booked: false, available: true },
        { value: 8, booked: false ,available: true },
        { value: 9, booked: false, available: true },
        { value: 10, booked: false, available: true },
        { value: 11, booked: false, available: true },
        { value: 12, booked: false, available: true },
        { value: 13, booked: false, available: true },
        { value: 14, booked: false, available: true },
        { value: 15, booked: false, available: true },
        { value: 16, booked: false, available: true },
        { value: 17, booked: false, available: true },
        { value: 18, booked: false, available: true },
        { value: 19, booked: false, available: true },
        { value: 20, booked: false, available: true },
        { value: 21, booked: false, available: true },
    ])
   

    const { data, error, isLoading: isQueryLoading } = useQuery({
        queryKey: ["bookings"],
        queryFn: BookingService.fetchBookings,
        select: (data) => data?.data,
    });




    const checkBookings = () => {
        if (!data || !selectedDate) return;
        const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
        const updatedHours = hours.map(hour => ({ ...hour, booked: false, available: true })); // Reset hours state
        setStartHour(null)
        setEndHour(null)
        setSelectedHours([])
        data.forEach((booking) => {
            const bookingDate = new Date(booking.date);
            if (bookingDate.toISOString().split('T')[0] === formattedSelectedDate && booking.room === item.id) {
                booking.hours.forEach((hour) => {
                    const ind = updatedHours.findIndex((item) => item.value.toString() === hour);
                    if (ind >= 0) {
                        updatedHours[ind].booked = true;
                    }
                });
            }
        });
        setHours(updatedHours);
    };

    const handleTimeClick = (hour: number) => {
        if (hour === startHour || hour === endHour) {
            setStartHour(null)
            setEndHour(null)
            setSelectedHours([])
            checkBookings()
        } else if (startHour !== null && startHour < hour && endHour === null) {
            setEndHour(hour);
            const selected: number[] = [];
            hours.forEach((item) => {
                if (item.value >= startHour && item.value <= hour) {
                    selected.push(item.value);
                }
            });
            setSelectedHours(selected);
        } else if (startHour === null) {
            setStartHour(hour);
            setSelectedHours([hour]);

            const firstBooking = hours.find((item) => item.booked === true && item.value > hour);
            if (firstBooking) {
                hours.forEach((item) => (item.value > firstBooking.value ? (item.available = false) : ''));
            }
        } else if (startHour !== null && endHour !== null) {
            setStartHour(hour);
            setEndHour(null);
            setSelectedHours([hour]);
        } else if (startHour !== null && hour < startHour) {
            setStartHour(hour);
            setSelectedHours([hour]);
        }
    };

    const router = useRouter();

    const handleSubmitClick = () => {
        const dateString = selectedDate ? selectedDate.toISOString().split('T')[0] : '';
        localStorage.setItem('selectedDate', dateString);
        localStorage.setItem('selectedHours', JSON.stringify(selectedHours));
        localStorage.setItem('room', JSON.stringify(item));

        if (selectedHours.length) {
            router.push('/checkout');
            document.body.style.overflow = "";
        }
    };
    useEffect(() => {
        checkBookings();

    }, [selectedDate, data]);

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
                    {hours.map((item, ind) => (
                        <button
                            disabled={item.booked === true || item.available === false}
                            key={ind}
                            onClick={() => handleTimeClick(item.value)}
                            className={`${styles.time} ${item.available === false && styles.notAvailable} ${(startHour === item.value || endHour === item.value) && styles.start_end} ${selectedHours.includes(item.value) && styles.activeTime}`}
                        >
                            {item.value + ':00'}
                        </button>
                    ))}
                </div>
            </div>
            <Button disabled={!selectedHours.length} onClick={handleSubmitClick}>Submit</Button>
        </div>
    );
};

export default MyCalendar;