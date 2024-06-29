import React, { useState } from 'react';
import styles from './BookingOptions.module.scss';
import MyCalendar from '../MyCalendar';
import { BookingType, Room } from '@/app/checkout/page';
import Button from '../Button';
import { useBookingsStore } from '@/app/checkout/store';

interface BookingOptionsType {
    room: Room
}

const BookingOptions: React.FC<BookingOptionsType> = ({ room }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [selectedHours, setSelectedHours] = useState<number[]>([]);
    const [additions, setAdditions] = useState({
        coffee: false,
        girls: false,
        music: false
    });
    const [paymentMethod, setPaymentMethod] = useState('bill')
    const [numberOfVisitors, setNumberOfVisitors] = useState<number>(1)

    const addBooking = useBookingsStore(store => store.addBooking)
    const bookings = useBookingsStore(store => store.bookings)

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
            date: selectedDate,
            hours: selectedHours,
            additions: additions,
            paymentMethod: paymentMethod,
            numberOfVisitors: numberOfVisitors,
            room: room.name,
        } 
        addBooking(newBooking)
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


            <div className={styles.additions}>
                <h3>Additional services</h3>
                <label>
                    <input name='coffee' checked={additions.coffee} onChange={handleChangeAdditions} type='checkbox' />
                    coffee
                </label>

                <label>
                    <input name='girls' checked={additions.girls} onChange={handleChangeAdditions} type='checkbox' />
                    Girls
                </label>

                <label>
                    <input name='music' checked={additions.music} onChange={handleChangeAdditions} type='checkbox' />
                    Music
                </label>
            </div>



            <h3>Zalungsmethode</h3>

            <div className={styles.payment_method}>
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

            <div>
                <h3>Besucherzahl</h3>


            </div>

            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    )
}

export default BookingOptions;