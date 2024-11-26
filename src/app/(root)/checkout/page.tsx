"use client"
import React, { FC } from 'react';
import styles from './checkout.module.scss'
import AuthService from '@/services/authService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BookingService from '@/services/bookingService';
import { CartItem, useBookingsStore } from './store';
import { Auth, Button, Cart, Footer, Header, InfoBoard, Loader } from '@/components';
import toast from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';

export interface Room {
  name: string;
  description: string;
  img: string;
  id: string;
}

export type BookingType = Omit<CartItem, 'id'> & {
  userId: string;
};


const Checkout: FC = () => {
  const cartItems = useBookingsStore(store => store.bookings);
  const clearCart = useBookingsStore(store => store.deleteAllBookings);

  const router = useRouter();
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
      queryClient.setQueryData(["booking"], response.data);
      queryClient.invalidateQueries({ queryKey: ['booking'] });
      clearCart();
      toast.success("Booking successful");
      router.push('/');
    },
    onError: (error) => {
      // Handle error
      console.error("Booking failed", error);
      toast.error("Something went wrong");
    },
  });



  const bookingHandler = (values: CartItem[]) => {
    if (data?.user.id) {
      const bookings = values.map(({ id, ...values }) => ({ userId: data?.user.id, ...values }))
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

            <InfoBoard imgUrl="/assets/email.png" text={'We have sent you an email to activate your account. Check your E-mail'} condition={!!(data?.user && !data.user.isActivated)} />

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
              </div>

            }
            {
              !data?.user &&
              <Auth />
            }
          </>}



      </div>
    </div>
  )
}

export default Checkout