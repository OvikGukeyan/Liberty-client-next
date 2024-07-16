import React from 'react';
import styles from './Cart.module.scss';
import Image from 'next/image';
import { useBookingsStore } from '../../app/checkout/store';
import Button from '../Button';
import { useRouter } from 'next/navigation';


const Cart = () => {

    const deleteBooking = useBookingsStore(store => store.deleteBooking);
    const cartItems = useBookingsStore(store => store.bookings)
    const router = useRouter()

    return (
        <div className={styles.cart}>
            <h2>Your bookings:</h2>
            <div className={styles.cart_items}>
                {cartItems.length >= 1 ? cartItems.map(item => (
                    <div className={styles.cart_item}>
                        <Image className={styles.room_image} src={'/assets/conf1.jpeg'} alt='room' width={80} height={80} />
                        <div className={styles.info}>
                            <span>{item.room}</span>
                            <span>Date: {item.date}</span>
                            <div className={styles.selected_hours}>Hours:  {item.hours.length && item.hours[0] + ':00'} {item.hours.length > 1 && <span>  {" -" + (Number(item.hours.at(-1)) + 1) + ':00'} {'( ' + item.hours.length + ' hours )'}</span>} </div>

                        </div>
                        <Image onClick={() => deleteBooking(item.id)} src={'/assets/close.png'} alt='delete' width={30} height={30} />
                    </div>
                )):
                <div className={styles.cart_empty}>
                    <h1>You have no bookings yet!</h1>
                    <Image src={'/assets/cart_empty.png'} alt='cart empty' width={200} height={200}/>
                    <Button className={'pink_button'} onClick={() => router.push('/coworking')}>Back to booking</Button>
                </div>
                }

            </div>


            <h3>Total price: <span> 50 </span>€</h3>


        </div>
    )
}

export default Cart;