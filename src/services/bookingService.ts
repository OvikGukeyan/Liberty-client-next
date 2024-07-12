import { BookingType } from "@/app/checkout/page";
import $api from "@/http";
import { Booking } from "@/models/Booking";
import { AxiosResponse } from "axios";

export default class BookingService {
    static async fetchBookings (): Promise<AxiosResponse<Booking[]>> {
        return $api.get('/bookings')
    }

    static async newBooking (booking: BookingType[]): Promise<AxiosResponse<Booking>> {
        return $api.post('/book', booking)
    }
}