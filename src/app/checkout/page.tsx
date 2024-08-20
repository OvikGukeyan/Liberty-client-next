"use client"
import React from 'react';
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
import { CartItem, useBookingsStore } from './store';
import Cart from '../../components/Cart';

export interface Room {
  name: string;
  description: string;
  img: string;
  id: string;
}

export type BookingType = Omit<CartItem, 'id'> & {
  userId: string;
};


const Checkout: React.FC = () => {
  const cartItems = useBookingsStore(store => store.bookings);
  const clearCart = useBookingsStore(store => store.deleteAllBookings);

  const { data, error, isLoading: isQueryLoading } = useQuery({
    queryKey: ["authData"],
    queryFn: AuthService.checkAuth,
    select: (data) => data?.data,
    retry: false
  });

  const queryClient = useQueryClient()


  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (values: BookingType[]) => {
      return BookingService.newBooking(values);
    },
    onSuccess: (response) => {
      // Handle success
      console.log("Booking successful", response.data);
      queryClient.setQueryData(["booking"], response.data);
      queryClient.invalidateQueries({ queryKey: ['booking'] });
      clearCart();
    },
    onError: (error) => {
      // Handle error
      console.error("Registration failed", error);
    },
  });



  const bookingHandler = (values: CartItem[]) => {
    if (data?.user.id) {
      const bookings = values.map(({ id, ...values }) => ({ userId: data?.user.id, ...values }))
      console.log(values)
      mutate(bookings);
    }
  };

  
  return (

    <div className={styles.checkout}>
      <Header />
      <div className={styles.main}>
        <Cart />
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
                <Button disabled={!cartItems.length} className={'pink_button'} onClick={() => bookingHandler(cartItems)}>Buchen</Button>
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