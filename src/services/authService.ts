import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { RegistrationValues } from "@/components/RegistrationForm";
import { LoginValues } from "@/components/LoginForm";


export default class AuthService {
    static async login(values: LoginValues): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {...values})
    }

    static async registration (values: RegistrationValues): Promise<AxiosResponse<AuthResponse>> {
        console.log(values)
        return $api.post<AuthResponse>('/registration', {...values})
    }

    static async logout (): Promise<void> {
        return $api.post('/logout')
    }

    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {withCredentials: true})
    }
};

