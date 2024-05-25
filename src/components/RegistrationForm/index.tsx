"use client";
import React, { useState } from "react";
import styles from "./RegistrationForm.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const RegistrationForm = () => {


    const {
        watch,
        register,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        reset,
    } = useForm({ mode: "onBlur" });

    const password = watch('password', '');

    const roomJSON = localStorage.getItem('room')
    const hoursJSON = localStorage.getItem('selectedHours')

    const booking = {
        room: roomJSON ? JSON.parse(roomJSON) : '',
        date: localStorage.getItem('selectedDate'),
        hours: hoursJSON ? JSON.parse(hoursJSON) : '',
    }





    const submitHandler = (values: FieldValues) => {
        console.log(values)

        // reset();
    };
    return (
        <div className={styles.checkout}>
            <div className={styles.bookedItem}>
                <div className={styles[booking.room ? booking.room.img : '']}></div>
                <div className={styles.description}>
                    <h2>{booking.room.name}</h2>
                    <p>Date: {booking.date}</p>
                    <p>Hours: {booking.hours.map((i: any) => <span>{i}, </span>)} </p>
                    <p>Price: {booking.hours.length * 20} $</p>
                    
                </div>
            </div>

            <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
                <h2 className={styles.title}>REGISTRATION</h2>
                <div className={styles.input_box}>
                    <label>
                        Vorname:
                        {errors?.firstName && (
                            <p>{errors?.firstName?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.firstName && styles.input_error} ${styles.input
                                }`}
                            {...register("firstName", {
                                required: "Required field",
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: "Name must contain at least three letters",
                                },
                            })}
                        />
                    </label>

                    <label>
                        Nachname:
                        {errors?.lastName && (
                            <p>{errors?.lastName?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.lastName && styles.input_error} ${styles.input
                                }`}
                            {...register("lastName", {
                                required: "Required field",
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: "Name must contain at least three letters",
                                },
                            })}
                        />
                    </label>

                    <label>
                        Email:
                        {errors?.emailAddress && (
                            <p>
                                {errors?.emailAddress?.message?.toString() || "Wrong format!"}
                            </p>
                        )}
                        <input
                            className={`${errors?.emailAddress && styles.input_error} ${styles.input
                                }`}
                            {...register("emailAddress", {
                                required: "Required field",
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                    message: "Wrong E-mail format!",
                                },
                            })}
                            type="email"
                        />
                    </label>
                    <label>
                        Mobil:
                        {errors?.phoneNumber && (
                            <p>{errors?.phoneNumber?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.phoneNumber && styles.input_error} ${styles.input
                                }`}
                            {...register("phoneNumber", {
                                required: "Required field",
                                pattern: {
                                    value:
                                        /^(\+?\d{1,3}[-\.\s]?)?\(?\d{3}\)?[-\.\s]?\d{3}[-\.\s]?\d{2}[-\.\s]?\d{2}$/,
                                    message: "Wrong Number format!",
                                },
                            })}
                            type="tel"
                        />
                    </label>
                </div>



                <h3>ADRESSE</h3>
                <div className={styles.input_box}>
                    <label className={styles.address_input}>
                        Straße + Hausnummer:
                        {errors?.address && (
                            <p>{errors?.address?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.address && styles.input_error} ${styles.input
                                }`}
                            {...register("address", {
                                required: "Required field",
                                pattern: {
                                    value: /^[a-zA-Z0-9\s,'-]*$/,
                                    message: "Wrong Address format!",
                                },
                            })}
                        />
                    </label>

                    <label>
                        PLZ:
                        {errors?.zipCode && (
                            <p>{errors?.zipCode?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.zipCode && styles.input_error} ${styles.input
                                }`}
                            {...register("zipCode", {
                                required: "Required field",
                                pattern: {
                                    value: /^\d+$/,
                                    message: "Wrong ZIP code format!",
                                },
                            })}
                        />
                    </label>

                    <label>
                        Ort:
                        {errors?.city && (
                            <p>{errors?.city?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.city && styles.input_error} ${styles.input
                                }`}
                            {...register("city", {
                                required: "Required field",
                                pattern: {
                                    value: /^\D*$/,
                                    message: "Wrong City format!",
                                },
                            })}
                        />
                    </label>
                    <label>
                        Land:
                        {errors?.country && (
                            <p>{errors?.country?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.country && styles.input_error} ${styles.input
                                }`}
                            {...register("country", {
                                required: "Required field",
                                pattern: {
                                    value: /^\D*$/,
                                    message: "Wrong Country format!",
                                },
                            })}
                        />
                    </label>
                </div>


                <h3>PASSWORD</h3>

                <div className={styles.input_box}>
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

                    <label>Confirm Password
                        {errors?.confirmPassword && (
                            <p>{errors?.confirmPassword?.message?.toString() || "Wrong format!"}</p>
                        )}
                        <input
                            className={`${errors?.confirmPassword && styles.input_error} ${styles.input}`}
                            type="password"
                            {...register('confirmPassword', {
                                required: 'Please confirm your password',
                                validate: value => value === password || 'Passwords do not match'
                            })}
                        />
                    </label>


                </div>



                <div className={styles.check_box}>
                    <input
                        {...register("check", {
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

                <button
                    disabled={!isValid}
                    className={styles.submit_button}
                    type="submit"
                >
                    Buchen
                </button>
            </form>
        </div>

    );
};

export default RegistrationForm;
