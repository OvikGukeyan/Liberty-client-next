import React from 'react';
import styles from './LoginForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AuthService from '@/shared/services/authService';
import { FormInput, Loader } from '..';
import toast from 'react-hot-toast';
import { formLoginSchema, TFormLoginValues } from '../../shared/schemas/loginSchema';




export const LoginForm = () => {

    const form = useForm<TFormLoginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: "onBlur"
    },

    );

    const queryClient = useQueryClient()



    const { isPending, mutate } = useMutation({
        mutationFn: async (values: TFormLoginValues) => {
            return AuthService.login(values);
        },
        onSuccess: (response) => {
            queryClient.setQueryData(["authData"], response.data);
            queryClient.invalidateQueries({ queryKey: ['authData'] });
            localStorage.setItem('token', response.data.accessToken)
            toast.success("Login successful");
        },
        onError: (error) => {
            console.error("Login failed", error);
            toast.error("Login failed");
        },
    });

    const submitHandler: SubmitHandler<TFormLoginValues> = (values) => {
        mutate(values);
    };



    return (
        <div className={styles.login_form}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)}>
                    <h2 className={styles.title}>Login</h2>
                    <div className={styles.input_box}>
                        {/* <label>
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
                        </label> */}
                        <FormInput name="email" label="Email" className='full'/>

                        {/* <label>Password
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
                        </label> */}
                        <FormInput name="password" label="Password" className='full'/>
                    </div>
                    <Loader isLoading={isPending} />
                    <button
                        disabled={!form.formState.isValid}
                        className={styles.submit_button}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </FormProvider>

        </div>
    )
}
