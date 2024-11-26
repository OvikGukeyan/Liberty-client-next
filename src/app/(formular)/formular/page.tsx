"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./formular.module.scss";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import axios from "axios";
import qs from "qs";
import Image from "next/image";
import Link from "next/link";
import { Button, FormInput, InfoBoard, Loader, RadioInput } from "@/components";
import { contactFormSchema, TFormContactValues } from "../../../../schemas/contactFormSchema";

const ContactForm: FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TFormContactValues>({
    resolver: zodResolver(contactFormSchema),
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
  const { register, formState: { errors, isValid } } = form;

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(
        window.location.search.substring(1)
      ) as unknown as { id: string };
      form.setValue("manager", params.id);
    }
  }, []);

  const submitHandler = (values: FieldValues) => {
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
    form.reset();
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
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)}>
            <h3>ANREDE</h3>
            <div className={styles.input_box}>
              <RadioInput name={'salutation'} label={'Herr'} value={'herr'} type="radio"/>
              <RadioInput name={'salutation'} label={'Frau'} value={'frau'} type="radio"/>
              <FormInput name={'titel'} label={'Titel'} />
            </div>

            <h3>KONTAKTINFORMATIONEN</h3>
            <div className={styles.input_box}>
              <FormInput name={'firstName'} label={'Vorname'} />
              <FormInput name={'lastName'} label={'Nachname'} />
              <FormInput name={'emailAddress'} label={'Email'} />
              <FormInput name={'phoneNumber'} label={'Mobil'} />
            </div>

            <h3>ADRESSE</h3>
            <div className={styles.input_box}>

              <FormInput name={'address'} label={'Straße + Hausnummer'} className='full' />
              <FormInput name={'zipCode'} label={'PLZ'} />
              <FormInput name={'city'} label={'Ort'} />
              <FormInput name={'country'} label={'Land'} />
            </div>

            <h3>Ich wünche eine unverbindliche Beratung zu folgendem Thema</h3>
            <div className={styles.input_box}>
              <RadioInput name={'topic'} label={'Baufinanzierung'} value={'baufinanzierung'}  type="checkbox"/>
              <RadioInput name={'topic'} label={'Privatkredit'} value={'privatkredit'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Autokredit'} value={'autokredit'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Versicherung'} value={'versicherung'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Kapitalaufbau'} value={'kapitalaufbau'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Immobilien'} value={'immobilien'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Modernisierungsdarlehen'} value={'modernisierungsdarlehen'} type="checkbox"/>
              <RadioInput name={'topic'} label={'Kapitalbeschaffung'} value={'kapitalbeschaffung'} type="checkbox"/>
            </div>
            <div className={styles.input_box}>
              <label className={styles.description}>
                Bemerkung:
                <textarea {...register("description")} />
              </label>
            </div>
            <div className={styles.check_box}>
              <input
                {...register("check")}
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
        </FormProvider>

      </div>

      <InfoBoard imgUrl="/assets/submited.png" text={'Vielen Dank für Ihr Vertrauen. Wir kümmern uns schnellstmöglich um Ihr Anliegen'} condition={isSubmitted} />
      <Loader isLoading={isLoading} />
      <InfoBoard imgUrl="/assets/error.png" text="Beim Senden ist ein Fehler aufgetreten" condition={isRejected} />
    </div>
  );
};

export default ContactForm;
