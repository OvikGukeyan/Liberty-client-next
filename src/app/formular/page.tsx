"use client";

import React, { useEffect, useState } from "react";
import styles from "./formular.module.scss";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";
import qs from "qs";
import Image from "next/image";
import Link from "next/link";
import { Button, InfoBoard, Loader } from "@/components";

const ContactForm: React.FC = () => {
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
      salutation: "herr",
      titel: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      topic: ["baufinanzierung"],
      description: "",
      check: false,
      manager: "Liberty-web-site",
    },
    mode: "onBlur",
  });

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as { id: string };
      setValue("manager", params.id);
      console.log(params.id)
    }
  }, []);

  const submitHandler = (values: FieldValues) => {
    console.log(values)
    setIsLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/contact`, values)
      .then((response) => {
        document.body.style.overflow = "hidden";
        setIsRejected(false);
        setIsSubmitted(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsLoading(false);
        setIsSubmitted(false);
        setIsRejected(true);
      });
    reset();
  };

  return (
    <div className={styles.checkout_wrapper}>

      <Link href={'/'}>
        <Button className={'go_back'}>
          <Image src={'/assets/left_arrow.png'} width={25} height={25} alt='arrow' />
          Back Home
        </Button>
      </Link>
      <div className={styles.checkout_box}>

        <div className={styles.header}>
          <Image
            className={styles.logo}
            alt="Logo"
            src={"/assets/logo.png"}
            width={140}
            height={50}
          />
          <Image
            className={styles.company_name}
            alt="company name"
            src={"/assets/name.png"}
            width={270}
            height={80}
          />
        </div>
        <h1>Kontaktformular </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <h3>ANREDE</h3>
          <div className={styles.input_box}>
            <label className={styles.radio_label}>
              Herr
              <input
                className={styles.radio}
                {...register("salutation", {
                  required: "Required field",
                })}
                type="radio"
                value="herr"
              />
            </label>

            <label className={styles.radio_label}>
              Frau
              <input
                className={styles.radio}
                {...register("salutation")}
                type="radio"
                value="frau"
              />
            </label>
            <label>
              Titel:
              {errors?.titel && (
                <p>{errors?.titel?.message?.toString() || "Wrong format!"}</p>
              )}
              <input
                className={`${errors?.titel && styles.input_error} ${styles.input
                  }`}
                {...register("titel", {
                  required: false,
                  pattern: {
                    value: /[A-Za-z]{2}/,
                    message: "Titel must contain at least two letters",
                  },
                })}
              />
            </label>
          </div>

          <h3>KONTAKTINFORMATIONEN</h3>
          <div className={styles.input_box}>
            <label>
              Vorname:
              {errors?.firstName && (
                <p>
                  {errors?.firstName?.message?.toString() || "Wrong format!"}
                </p>
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
                <p>
                  {errors?.lastName?.message?.toString() || "Wrong format!"}
                </p>
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
                <p>
                  {errors?.phoneNumber?.message?.toString() || "Wrong format!"}
                </p>
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

          <h3>Ich wünche eine unverbindliche Beratung zu folgendem Thema</h3>
          <div className={styles.input_box}>
            <label className={styles.radio_label}>
              Baufinanzierung
              <input
                className={styles.radio}
                {...register("topic", {
                  required: "You have to select at least one topic",
                })}
                type="checkbox"
                value="baufinanzierung"
              />
            </label>
            <label className={styles.radio_label}>
              Privatkredit
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="privatkredit"
              />
            </label>
            <label className={styles.radio_label}>
              Autokredit
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="autokredit"
              />
            </label>
            <label className={styles.radio_label}>
              Versicherung
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="versicherung"
              />
            </label>
            <label className={styles.radio_label}>
              Kapitalaufbau
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="kapitalaufbau"
              />
            </label>
            <label className={styles.radio_label}>
              Immobilien
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="immobilien"
              />
            </label>
            <label className={styles.radio_label}>
              Modernisierungsdarlehen
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="modernisierungsdarlehen"
              />
            </label>
            <label className={styles.radio_label}>
              Kapitalbeschaffung
              <input
                className={styles.radio}
                {...register("topic")}
                type="checkbox"
                value="kapitalbeschaffung"
              />
            </label>
          </div>
          <div className={styles.input_box}>
            <label className={styles.description}>
              Bemerkung:
              <textarea {...register("description")} />
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
              Hiermit bestätige ich, dass ich mit der Speicherung und
              Verarbeitung meiner Daten einverstanden bin{" "}
            </p>
          </div>


          <Button disabled={!isValid} className={'black_button'} type="submit">
            Abschicken
          </Button>
        </form>
      </div>

      <InfoBoard text={'Vielen Dank für Ihr Vertrauen. Wir kümmern uns schnellstmöglich um Ihr Anliegen'} condition={isSubmitted} />
      <Loader isLoading={isLoading} />
      <InfoBoard text="Beim Senden ist ein Fehler aufgetreten" condition={isRejected} />
    </div>
  );
};

export default ContactForm;
