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
import { contactFormSchema, TFormContactValues } from "../../../shared/schemas/contactFormSchema";
import { useMutation } from "@tanstack/react-query";
import FormService from "@/shared/services/formService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ContactForm: FC = () => {

  const router = useRouter();

  const form = useForm<TFormContactValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      salutation: "herr",
      titel: "",
      firstName: "",
      lastName: "",
      email: "",
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
      form.setValue("manager", params.id);
    }
  }, []);


  const { mutate, isPending } = useMutation({
    mutationFn: async (values: TFormContactValues) => {
      return FormService.sendContactForm(values);
    },
    onSuccess: (response) => {
      toast.success("Contact form submitted successfully. We will contact you soon.");
      form.reset();
      router.push('/');
    },
    onError: (error) => {
      console.error("Sending failed", error);
      toast.error("Sending failed");
    },
  });


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
          <form onSubmit={form.handleSubmit(values => mutate(values))}>
            <h3>ANREDE</h3>
            <div className={styles.input_box}>
              <RadioInput name={'salutation'} label={'Herr'} value={'herr'} type="radio" />
              <RadioInput name={'salutation'} label={'Frau'} value={'frau'} type="radio" />
              <FormInput name={'titel'} label={'Titel'} />
            </div>

            <h3>KONTAKTINFORMATIONEN</h3>
            <div className={styles.input_box}>
              <FormInput name={'firstName'} label={'Vorname'} />
              <FormInput name={'lastName'} label={'Nachname'} />
              <FormInput name={'email'} label={'Email'} />
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
              <RadioInput name={'topic'} label={'Baufinanzierung'} value={'baufinanzierung'} type="checkbox" />
              <RadioInput name={'topic'} label={'Privatkredit'} value={'privatkredit'} type="checkbox" />
              <RadioInput name={'topic'} label={'Modernisierungsdarlehen'} value={'odernisierungsdarlehen'} type="checkbox" />
              <RadioInput name={'topic'} label={'Versicherung'} value={'versicherung'} type="checkbox" />
              <RadioInput name={'topic'} label={'Kapitalaufbau'} value={'kapitalaufbau'} type="checkbox" />
              <RadioInput name={'topic'} label={'Immobilien'} value={'immobilien'} type="checkbox" />
              <RadioInput name={'topic'} label={'Modernisierungsdarlehen'} value={'modernisierungsdarlehen'} type="checkbox" />
              <RadioInput name={'topic'} label={'Kapitalbeschaffung'} value={'kapitalbeschaffung'} type="checkbox" />
            </div>
            <div className={styles.input_box}>
              <label className={styles.description}>
                Bemerkung:
                <textarea {...form.register("description")} />
              </label>
            </div>
            <div className={styles.check_box}>
              <input
                {...form.register("check")}
                className={styles.check}
                type="checkbox"
              />
              <p>
                Hiermit bestätige ich, dass ich mit der Speicherung und
                Verarbeitung meiner Daten einverstanden bin{" "}
              </p>
            </div>


            <Button disabled={!form.formState.isValid} className={'black_button'} type="submit">
              Abschicken
            </Button>
          </form>
        </FormProvider>

      </div>
      <Loader isLoading={isPending} />
    </div>
  );
};

export default ContactForm;
