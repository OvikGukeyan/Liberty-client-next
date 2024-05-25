import $api from "../http";
import axios, { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout (): Promise<void> {
        return $api.post('/logout')
    }

    static async checkAuth() {
        return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {withCredentials: true})
    }
};

