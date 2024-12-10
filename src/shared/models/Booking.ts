import { IUser } from "./IUser"

export interface Booking {
    date: Date
    hours: string[]
    user: IUser
    room: string
}

