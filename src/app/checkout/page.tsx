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
import { useBookingsStore } from './store';
import Image from 'next/image';
import { all } from 'axios';
import { it } from 'node:test';

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
  userId: string;
  additions: {
    coffee: boolean;
    girls: boolean;
    music: boolean;
  },
  paymentMethod: string
}

const Checkout: React.FC = () => {

  const bookings = useBookingsStore(store => store.bookings)
  const deleteBooking = useBookingsStore(store => store.deleteBooking)

  const { data, error, isLoading: isQueryLoading } = useQuery({
    queryKey: ["authData"],
    queryFn: AuthService.checkAuth,

    select: (data) => data?.data
  });

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
        <div className={styles.cart}>
          <h2>Your bookings</h2>
          {bookings.length && bookings.map(item => (
            <div className={styles.cart_item}>
              <Image className={styles.room_image} src={'/assets/conf1.jpeg'} alt='room' width={80} height={80} />
              <div className={styles.info}>
                <span>{item.room}</span>
                <span>Date: {item.date}</span>
                <div className={styles.selected_hours}>Hours:  {item.hours.length && item.hours[0] + ':00'} {item.hours.length > 1 && <span>  {" -" + (Number(item.hours.at(-1)) + 1) + ':00'} {'( ' + item.hours.length + ' hours )'}</span>} </div>

              </div>
              <Image onClick={() => deleteBooking(item.id)} src={'/assets/close.png'} alt='delete' width={30} height={30} />
            </div>
          ))}




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
                {/* <Button onClick={() => bookingHandler(booking)}>Buchen</Button> */}
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