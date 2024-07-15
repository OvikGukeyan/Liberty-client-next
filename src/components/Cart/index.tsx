import React from 'react';
import styles from './Cart.module.scss';
import Image from 'next/image';
import { useBookingsStore } from '../../app/checkout/store';


const Cart = () => {

    const deleteBooking = useBookingsStore(store => store.deleteBooking);
    const cartItems = useBookingsStore(store => store.bookings)

    return (
        <div className={styles.cart}>
            <h2>Your bookings</h2>
            <div className={styles.cart_items}>
                {cartItems.length && cartItems.map(item => (
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


            <h3>Total price: <span> 50 </span>€</h3>


        </div>
    )
}

export default Cart;