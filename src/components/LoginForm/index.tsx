import React from 'react';
import styles from './LoginForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthService from '@/services/authService';
import { Loader } from '..';


export interface LoginValues {
    email: string
    password: string
}

export const LoginForm = () => {

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm<LoginValues>({ mode: "onBlur" });

    const queryClient = useQueryClient()

    
    
    const {isPending, mutate} = useMutation({
        mutationFn: async (values: LoginValues) => {
            return AuthService.login(values);
        },
        onSuccess: (response) => {
            // Handle success
            queryClient.setQueryData(["authData"], response.data);
            queryClient.invalidateQueries({queryKey: ['authData']});
            localStorage.setItem('token', response.data.accessToken)
        },
        onError: (error) => {
            // Handle error
            console.error("Login failed", error);
            alert("Login failed");
        },
    });

    const submitHandler: SubmitHandler<LoginValues> = (values) => {
        mutate(values);
    };



    return (
        <div className={styles.login_form}>
            <form onSubmit={handleSubmit(submitHandler)}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.input_box}>
                    <label>
                        Email:
                        {errors?.email && (
                            <p>
                                {errors?.email?.message?.toString() || "Wrong format!"}
                            </p>
                        )}
                        <input
                            className={`${errors?.email && styles.input_error} ${styles.input
                                }`}
                            {...register("email", {
                                required: "Required field",
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                    message: "Wrong E-mail format!",
                                },
                            })}
                            type="email"
                        />
                    </label>

                    <label>Password
                        {errors?.password && (
                            <p>{errors?.password?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.password && styles.input_error} ${styles.input}`}
                            type="password"
                            {...register('password', {
                                required: 'Password is required', pattern: {
                                    value: /^[A-Za-z0-9!@#$%^&*]{6,}$/,
                                    message: 'Password must contain at least six characters including letters, numbers, or special characters',
                                },
                            })}
                        />
                    </label>
                </div>
                <Loader isLoading={isPending}/>
                <button
                    disabled={!isValid}
                    className={styles.submit_button}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
