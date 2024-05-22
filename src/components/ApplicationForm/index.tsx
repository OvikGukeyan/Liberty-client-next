"use client";
import React, { useState } from "react";
import styles from "./ApplicationForm.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const ApplicationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      description: "",
      communicationMethod: "telefonisch",
      check: false,
    },
    mode: "onBlur",
  });


  const submitHandler = (values: FieldValues) => {
    // setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/job`, values)
      .then((response) => {
        // document.body.style.overflow = "hidden";
        // setIsRejected(false);
        // setIsSubmitted(true);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // setIsLoading(false);
        // setIsSubmitted(false);
        // setIsRejected(true);
      });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <h2 className={styles.title}>BEWERBUNGS­FORMULAR</h2>
      <div className={styles.input_box}>
        <label>
          Vorname:
          {errors?.firstName && (
            <p>{errors?.firstName?.message?.toString() || "Wrong format!"}</p>
          )}
          <input
            className={`${errors?.firstName && styles.input_error} ${
              styles.input
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
            className={`${errors?.lastName && styles.input_error} ${
              styles.input
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
            className={`${errors?.emailAddress && styles.input_error} ${
              styles.input
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
            className={`${errors?.phoneNumber && styles.input_error} ${
              styles.input
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

      <div className={styles.input_box}>
        <label className={styles.description}>
          Bemerkung:
          <textarea {...register("description")} />
        </label>
      </div>

      <h3 className={styles.title}>Bitte kontaktieren Sie mich </h3>
      <div className={styles.input_box}>
        <label className={styles.radio_label}>
          telefonisch
          <input
            className={styles.radio}
            {...register("communicationMethod", {
              required: "Required field",
            })}
            type="radio"
            value="telefonisch"
          />
        </label>

        <label className={styles.radio_label}>
          per E-Mail
          <input
            className={styles.radio}
            {...register("communicationMethod")}
            type="radio"
            value="per E-Mail"
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
        Abschicken
      </button>
    </form>
  );
};

export default ApplicationForm;
