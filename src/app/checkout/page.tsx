"use client"
import React, { useEffect, useState } from 'react';
import styles from './checkout.module.scss'
import Header from '@/components/Header';
import AuthService from '@/services/authService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Auth from '@/components/Auth';
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import BookingService from '@/services/bookingService';
import Loader from '@/components/Loader';
import InfoBoard from '@/components/InfoBoard';

export interface Room {
  name: string;
  description: string;
  img: string;
  id: string;
}

export interface BookingType {
  room: string | null;
  date: string;
  hours: string[];
  userId: string
}

const Checkout: React.FC = () => {

  const [booking, setBooking] = useState<BookingType>({
    room: null,
    date: '',
    hours: [],
    userId: ''
  });
  const [room, setRoom] = useState<Room>()


  const { data, error, isLoading: isQueryLoading } = useQuery({
    queryKey: ["authData"],
    queryFn: AuthService.checkAuth,

    select: (data) => data?.data
  });

  useEffect(() => {
    if (data) {
      console.log('Data received:', data);
    }


    const roomJSON = localStorage.getItem('room');
    const hoursJSON = localStorage.getItem('selectedHours');
    roomJSON && setRoom(JSON.parse(roomJSON))
    setBooking({
      room: roomJSON ? JSON.parse(roomJSON).id : '',
      date: localStorage.getItem('selectedDate') || '',
      hours: hoursJSON ? JSON.parse(hoursJSON) : [],
      userId: data?.user.id || ''
    });

  }, [data]);



  const queryClient = useQueryClient()


  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: BookingType) => {
      return BookingService.newBooking(values);
    },
    onSuccess: (response) => {
      // Handle success
      console.log("Booking successful", response.data);
      queryClient.setQueryData(["booking"], response.data);
      queryClient.invalidateQueries({ queryKey: ['booking'] });
      // localStorage.setItem('myBooking', response.data)
    },
    onError: (error) => {
      // Handle error
      console.error("Registration failed", error);
    },
  });

  const bookingHandler = (values: BookingType) => {
    console.log(values)
    mutate(values);
  };



  return (

    <div className={styles.checkout}>
      <Header />
      <div className={styles.main}>
        <div className={styles.bookedItem}>
          <div className={styles[room ? room.img : '']}></div>
          <div className={styles.description}>
            <h2>{room && room.name}</h2>
            <p>Date: {booking.date}</p>
            <p>Hours: {booking.hours.map((item: string, index) => <span key={index}>{item + ':00'}, </span>)} </p>
            <p>Price: {booking.hours.length * 20} $</p>

          </div>
        </div>
        {isQueryLoading ? <Loader isLoading={isQueryLoading} /> :
          <>

            <InfoBoard text={'We have sent you an email to activate your account. Check your E-mail'} condition={!!(data?.user && !data.user.isActivated)} />

            {
              (data?.user && data.user.isActivated) &&
              <div className={styles.book}>
                <div className={styles.userInfo}>
                  <h3>User Info</h3>
                  <span>email: {data.user.email}</span>
                  <span>Name: {data.user.firstName} {data.user.lastName}</span>
                </div>
                <Button onClick={() => bookingHandler(booking)}>Buchen</Button>
                <Loader isLoading={isPending} />
                <InfoBoard text='Booking successful' condition={isSuccess} />
              </div>

            }
            {
              !data?.user &&
              <Auth />
            }
          </>}



      </div>
      <Footer isStatic={false} />

    </div>
  )
}

export default Checkout