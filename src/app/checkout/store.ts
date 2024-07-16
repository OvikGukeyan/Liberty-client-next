import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Define the type for CartItem
export type CartItem = {
    date: string;
    hours: number[];
    additions: {
        coffee: boolean;
        girls: boolean;
        music: boolean;
    };
    paymentMethod: string;
    numberOfVisitors: number;
    room: string;
    id: number; 
};

// Define the interface for the state
interface BookingsState {
    bookings: CartItem[];
    addBooking: (booking: CartItem) => void;
    deleteBooking: (id: number) => void;
    deleteAllBookings: () => void;
}

// Create the Zustand store with persist and immer middleware
export const useBookingsStore = create<BookingsState>()(
    persist(
        immer((set) => ({
            bookings: [],
            addBooking: (booking: CartItem) =>
                set((state) => {
                    state.bookings.push(booking);
                }),
            deleteBooking: (id: number) =>
                set((state) => {
                    state.bookings = state.bookings.filter(booking => booking.id !== id);
                }),
            deleteAllBookings: () => {
                set((state) => {
                    state.bookings = []
                })
            }
        })),
        {
            name: 'bookings-storage', // Name used as key in Local Storage
        }
    )
);