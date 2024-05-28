import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { RegistrationValues } from "@/components/RegistrationForm";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration (values: RegistrationValues): Promise<AxiosResponse<AuthResponse>> {
        console.log(values)
        return $api.post<AuthResponse>('/registration', {...values})
    }

    static async logout (): Promise<void> {
        return $api.post('/logout')
    }

    static async checkAuth() {
        return localStorage.getItem('token') && axios.get(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {withCredentials: true})
    }
};

