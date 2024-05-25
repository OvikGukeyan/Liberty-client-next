"use client"
import React, { useEffect, useState } from 'react';
import styles from './checkout.module.scss'
import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm';

const Checkout = () => {

  interface Room {
    name: string;
    description: string;
    img: string;
    id: number;
  }

  interface BookingType {
    room: Room | null;
    date: string;
    hours: string[];
  }

  const [booking, setBooking] = useState<BookingType>({
    room: null,
    date: '',
    hours: []
  });



  useEffect(() => {
    const roomJSON = localStorage.getItem('room');
    const hoursJSON = localStorage.getItem('selectedHours');

    setBooking({
      room: roomJSON ? JSON.parse(roomJSON) : '',
      date: localStorage.getItem('selectedDate') || '',
      hours: hoursJSON ? JSON.parse(hoursJSON) : []
    });
  }, []);

  return (

    <div className={styles.checkout}>
      <Header />
      <div className={styles.main}>
        <div className={styles.bookedItem}>
          <div className={styles[booking.room ? booking.room.img : '']}></div>
          <div className={styles.description}>
            <h2>{booking.room && booking.room.name}</h2>
            <p>Date: {booking.date}</p>
            <p>Hours: {booking.hours.map((i: string, index) => <span key={index}>{i}, </span>)} </p>
            <p>Price: {booking.hours.length * 20} $</p>

          </div>
        </div>
        <RegistrationForm />
      </div>

    </div>
  )
}

export default Checkout