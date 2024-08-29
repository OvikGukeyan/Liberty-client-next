import React from 'react';
import styles from './Cart.module.scss';
import Image from 'next/image';
import { useBookingsStore } from '../../app/checkout/store';
import Link from 'next/link';
import { Button } from '..';


export const Cart = () => {

    const deleteBooking = useBookingsStore(store => store.deleteBooking);
    const cartItems = useBookingsStore(store => store.bookings)

    

    return (
        <div className={styles.cart}>
            <h2>Your bookings:</h2>
            <div className={styles.cart_items}>
                {cartItems.length >= 1 ? cartItems.map((item, index) => (
                    <div key={index} className={styles.cart_item}>
                        <Image className={styles.room_image} src={'/assets/conf1.jpeg'} alt='room' width={80} height={80} />
                        <div className={styles.info}>
                            <span>{item.room}</span>
                            <span>Date: {item.date}</span>
                            <div className={styles.selected_hours}>Hours:  {item.hours.length && item.hours[0] + ':00'} {item.hours.length > 1 && <span>  {" -" + (Number(item.hours.at(-1)) + 1) + ':00'} {'( ' + item.hours.length + ' hours )'}</span>} </div>

                        </div>
                        <Image onClick={() => deleteBooking(item.id)} src={'/assets/close.png'} alt='delete' width={30} height={30} />
                    </div>
                )) :
                    <div className={styles.cart_empty}>
                        <h1>You have no bookings yet!</h1>
                        <Image src={'/assets/cart_empty.png'} alt='cart empty' width={100} height={100} />
                        <Link href={'/coworking'}>
                            <Button className={'pink_button'}>Back to booking</Button>
                        </Link>
                    </div>
                }

            </div>


            <h3>Total price: <span> 50 </span>€</h3>


        </div>
    )
}
