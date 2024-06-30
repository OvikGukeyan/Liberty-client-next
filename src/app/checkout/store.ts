import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// Define the type for CartItem
type CartItem = {
    date: Date | null;
    hours: number[];
    additions: {
        coffee: boolean;
        girls: boolean;
        music: boolean;
    };
    paymentMethod: string;
    numberOfVisitors: number;
    room: string;
    id: number; // ID can be optional when creating a new item
};

// Define the interface for the state
interface BookingsState {
    bookings: CartItem[];
    addBooking: (booking: CartItem) => void;
    deleteBooking: (id: number) => void;
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
        })),
        {
            name: 'bookings-storage', // Name used as key in Local Storage
        }
    )
);