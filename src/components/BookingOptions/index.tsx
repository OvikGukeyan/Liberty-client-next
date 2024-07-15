import React, { useState } from 'react';
import styles from './BookingOptions.module.scss';
import MyCalendar from '../MyCalendar';
import { Room } from '@/app/checkout/page';
import Button from '../Button';
import { useBookingsStore } from '@/app/checkout/store';
import Image from 'next/image';
import Cart from '@/components/Cart';
import { useRouter } from 'next/navigation';

interface BookingOptionsType {
    room: Room
}

const BookingOptions: React.FC<BookingOptionsType> = ({ room }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedHours, setSelectedHours] = useState<number[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [additions, setAdditions] = useState({
        coffee: false,
        girls: false,
        music: false
    });
    const [paymentMethod, setPaymentMethod] = useState('bill')
    const [numberOfVisitors, setNumberOfVisitors] = useState<number>(1)

    const router = useRouter()

    const addBooking = useBookingsStore(store => store.addBooking)
    const bookings = useBookingsStore(store => store.bookings)

    const handlePlusClick = () => {
        if(numberOfVisitors < 15) {
            setNumberOfVisitors(prev => prev + 1)
        }
    }

    const handleMinusClick = () => {
        if(numberOfVisitors > 1) {
            setNumberOfVisitors(prev => prev - 1)
        }
    }

    const handleChangeAdditions = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        const newAdditions = { ...additions, [name]: checked }
        setAdditions(newAdditions)
    };

    const handleChangePaymentMethode = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPaymentMethod = e.target.value;
        setPaymentMethod(newPaymentMethod)
    }

    const handleAddToCart = () => {
        const newBooking = {
            date: selectedDate.toISOString().split('T')[0],
            hours: selectedHours,
            additions: additions,
            paymentMethod: paymentMethod,
            numberOfVisitors: numberOfVisitors,
            room: room.name,
            id: Date.now()
        }
        addBooking(newBooking)
        setIsCartOpen(true)
        console.log(bookings)
        
    }

    return (
        <div className={styles.wrapper}>
            <MyCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedHours={selectedHours}
                setSelectedHours={setSelectedHours}
                room={room}
            />

            <div className={styles.adjustments}>
                <h3>Additional services</h3>

                <div className={styles.input_box}>
                    <label className={styles.radio_label}>
                        Coffee
                        <input className={styles.radio} name='coffee' checked={additions.coffee} onChange={handleChangeAdditions} type='checkbox' />
                    </label>

                    <label className={styles.radio_label}>
                        Girls
                        <input className={styles.radio} name='girls' checked={additions.girls} onChange={handleChangeAdditions} type='checkbox' />
                    </label>

                    <label className={styles.radio_label}>
                        Music
                        <input className={styles.radio} name='music' checked={additions.music} onChange={handleChangeAdditions} type='checkbox' />
                    </label>
                </div>



                <h3>Zalungsmethode</h3>

                <div className={styles.input_box}>
                    <label className={styles.radio_label}>
                        Rechnung
                        <input
                            onChange={handleChangePaymentMethode}
                            className={styles.radio}
                            name='paymentMethod'
                            type="radio"
                            value="bill"
                            checked={paymentMethod === 'bill'}
                        />
                    </label>

                    <label className={styles.radio_label}>
                        Kasse
                        <input
                            onChange={handleChangePaymentMethode}
                            name='paymentMethod'
                            className={styles.radio}
                            type="radio"
                            value="spot"
                            checked={paymentMethod === 'spot'}
                        />
                    </label>

                </div>
                <h3>Besucherzahl</h3>

                <div className={styles.number_of_visitors}>
                    <Image className={styles.plus_minus} onClick={handleMinusClick} src={'/assets/minus.png'} alt='minus' width={35} height={35}/>
                    <span>{numberOfVisitors}</span>
                    <Image className={styles.plus_minus} onClick={handlePlusClick} src={'/assets/plus.png'} alt='minus' width={35} height={35}/>


                </div>
            </div>



            <Button className={'pink_button'} disabled={!selectedHours.length} onClick={handleAddToCart}>Add to Cart</Button>
            {isCartOpen && <div className={styles.cart_wrapper}>
                <Cart/>
                <div className={styles.buttons}>
                    <Button className={'pink_button'} onClick={() => setIsCartOpen(false)}>Back to booking</Button>
                    <Button className={'pink_button'} onClick={() => router.push('/checkout')}>Checkout</Button>
                </div>
            </div>}
        </div>
    )
}

export default BookingOptions;