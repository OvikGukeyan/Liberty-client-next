"use client"
import React, { useEffect, useState } from 'react';
import styles from './checkout.module.scss'
import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm';
import AuthService from '@/services/authService';
import { useQuery } from '@tanstack/react-query';
import LoginForm from '@/components/LoginForm';

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

const Checkout = () => {

  const authMethods = [{name: 'Registration'}, {name: 'Login'}]

  const [booking, setBooking] = useState<BookingType>({
    room: null,
    date: '',
    hours: []
  });

  const [authMethod, setAuthMethod] = useState({name: 'Registration'})

  const { data, error, isLoading: isQueryLoading } = useQuery({
    queryKey: ["authData"],
    queryFn: AuthService.checkAuth,

    select: (data) => data
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
        <div className={styles.auth}>
          <h1>Authorization</h1>
          <div className={styles.switch}>
            {authMethods.map(item => <button onClick={() => setAuthMethod(item)} key={item.name} className={`${styles.auth_switch} ${authMethod.name === item.name && styles.active}`}>{item.name}</button>)}
          </div>
          {authMethod.name === 'Registration' ?
          <RegistrationForm />
          :
          <LoginForm/>
        }
          
        </div>
      </div>

    </div>
  )
}

export default Checkout