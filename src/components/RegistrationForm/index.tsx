"use client";
import React from "react";
import styles from "./RegistrationForm.module.scss";
import { Form, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AuthService from "@/shared/services/authService";
import { Button, FormInput, Loader } from "..";
import toast from "react-hot-toast";
import { formRegisterSchema, TFormRegisterValues } from "../../shared/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";



export const RegistrationForm = () => {


    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            address: "",
            zipCode: "",
            city: "",
            country: "",
            password: "",
            confirmPassword: "",
            check: false
        },
        mode: "onBlur"
    });


    const queryClient = useQueryClient()


    const { mutate, isPending } = useMutation({
        mutationFn: async (values: TFormRegisterValues) => {
            return AuthService.registration(values);
        },
        onSuccess: (response) => {
            console.log("Registration successful", response.data);
            queryClient.setQueryData(["authData"], response.data);
            queryClient.invalidateQueries({ queryKey: ['authData'] });
            localStorage.setItem('token', response.data.accessToken);
            toast.success("Registration successful");
        },
        onError: (error) => {
            console.error("Registration failed", error);
            toast.error("Registration failed");
        },
    });

    const submitHandler: SubmitHandler<TFormRegisterValues> = (values) => {
        mutate(values);
    };



    return (
        <div className={styles.registration_form}>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)} className={styles.form}>
                    <h2 className={styles.title}>REGISTRATION</h2>
                    <div className={styles.input_box}>
                        <FormInput name="firstName" label="Vorname" />
                        <FormInput name="lastName" label="Nachname" />
                        <FormInput name="email" label="E-mail" />
                        <FormInput name="phoneNumber" label="Mobil" />
                        <FormInput name="company" label="Firma" />
                    </div>

                    <h3>ADRESSE</h3>
                    <div className={styles.input_box}>
                        <FormInput name="address" label="Straße + Hausnummer" />
                        <FormInput name="zipCode" label="PLZ" />
                        <FormInput name="city" label="Ort" />
                        <FormInput name="country" label="Land" />
                    </div>

                    <h3>PASSWORD</h3>

                    <div className={styles.input_box}>
                        <FormInput name="password" label="Passwort" type="password" />
                        <FormInput name="confirmPassword" label="Passwort bestätigen" type="password" />
                    </div>

                    <div className={styles.check_box}>
                        <input
                            {...form.register("check", {
                                required: true,
                            })}
                            className={styles.check}
                            type="checkbox"
                        />
                        <p>
                            Hiermit bestätige ich, dass ich mit der Speicherung und Verarbeitung
                            meiner Daten einverstanden bin{" "}
                        </p>
                    </div>

                    <Button disabled={!form.formState.isValid} type={'submit'} className={'pink_button'}>
                        Submit
                    </Button>

                    {isPending && <Loader isLoading={isPending} />}
                </form>
            </FormProvider>



        </div>

    );
};

