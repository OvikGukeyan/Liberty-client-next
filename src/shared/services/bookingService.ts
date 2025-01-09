import { BookingType } from "@/app/(main)/checkout/page";
import $api from "@/shared/http";
import { Booking } from "@/shared/models/Booking";
import { AxiosResponse } from "axios";

export default class BookingService {
    static async fetchBookings (): Promise<AxiosResponse<Booking[]>> {
        return $api.get('/bookings')
    }

    static async newBooking (booking: BookingType[]): Promise<AxiosResponse<Booking>> {
        return $api.post('/book', booking)
    }
}