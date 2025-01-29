"use client";
import React, { useRef } from "react";
import styles from "./ApplicationForm.module.scss";
import { Form, FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import { Button, FormInput, Loader, RadioInput } from "..";
import { allowedFileTypes, maxSizeInBytes } from "./utils";
import formService from "@/shared/services/formService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { aplicationSchema, TFormAplicationValues } from "../../shared/schemas/aplicationSchema";



export const ApplicationForm = () => {
  const router = useRouter();
  const inputFileRef = useRef<HTMLInputElement>(null)

  const form = useForm<TFormAplicationValues>({
    resolver: zodResolver(aplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      description: "",
      communicationMethod: "telefonisch",
      check: false,
      cv: null
    },
    mode: "onBlur",
  });

  const cv = form.watch('cv');


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !allowedFileTypes.includes(file.type)) {
      toast.error("Invalid file type. Only PDF, DOC, DOCX and TXT are accepted.");
      form.setValue("cv", null);
      if (inputFileRef.current) inputFileRef.current.value = "";
      return;
    }

    if (file.size > maxSizeInBytes) {
      toast.error("The file is too large. Maximum size is 2MB.");
      form.setValue("cv", null);
      if (inputFileRef.current) inputFileRef.current.value = "";
      return;
    }

    form.setValue("cv", file);
  };

  const { isPending, mutate, error, isSuccess } = useMutation({
    mutationFn: async (values: TFormAplicationValues) => {
      return formService.sendAplicationForm(values);
    },
    onSuccess: (response) => {
      form.reset();
      toast.success("Deine Bewerbung wurde erfolgreich gesendet");
      router.push("/");
    },
    onError: (error) => {
      toast.error("Beim Senden ist ein Fehler aufgetreten");
      console.error("Sending failed", error);
    },
  });



  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((values) => mutate(values))} className={styles.form}>
        <h2 className={styles.title}>BEWERBUNGS­FORMULAR</h2>
        <div className={styles.input_box}>
          <FormInput name="firstName" label="Vorname" />
          <FormInput name="lastName" label="Nachname" />
          <FormInput name='email' label="E-Mail" />
          <FormInput name='phoneNumber' label="Telefonnummer" />
        </div>

        <div className={styles.input_box}>
          <label className={styles.description}>
            Bemerkung:
            <textarea {...form.register("description")} />
          </label>
        </div>


        {/* CV uploading  */}


        <div className={styles.file_box}>
          <h3>Upload your CV: <br /><span>(Only PDF, DOC, DOCX and TXT are accepted)</span></h3>

          <label onClick={() => inputFileRef.current?.click()} className={styles.file_upload} htmlFor="file">
            {cv ?
              <>
                <span>{cv.name}</span>
                <Image src={'/assets/ok.png'} alt="file" width={30} height={30} />

              </>
              :
              <>
                <span>Choose the file</span>
                <Image src={'/assets/file.png'} alt="file" width={30} height={30} />
              </>
            }

            <input
              {...form.register("cv")}
              onChange={handleFileChange}
              ref={inputFileRef}
              className={styles.file}
              type="file"
            />
          </label>

        </div>


        <h3 >Bitte kontaktieren Sie mich </h3>
        <div className={styles.input_box}>
          <RadioInput name="communicationMethod" label="telefonisch" value={"telefonisch"} type="radio"/>
          <RadioInput name="communicationMethod" label="per E-Mail" value={"per E-Mail"} type="radio"/>
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

        <Loader isLoading={isPending} />

        <Button className={'black_button'} disabled={!form.formState.isValid} type="submit" >Abschicken</Button>
      </form>
    </FormProvider>

  );
};

