"use client";
import React, { useRef } from "react";
import styles from "./ApplicationForm.module.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";

interface FormValues {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  description: string;
  communicationMethod: string;
  check: boolean;
  cv: File | null;
}


const ApplicationForm = () => {

  const inputFileRef = useRef<HTMLInputElement>(null)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
    reset,
    watch
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      description: "",
      communicationMethod: "telefonisch",
      check: false,
      cv: null
    },
    mode: "onBlur",
  });

  const cv = watch('cv')

  


  const submitHandler = async (values: FormValues) => {
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("emailAddress", values.emailAddress);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("description", values.description);
    formData.append("communicationMethod", values.communicationMethod);
    formData.append("check", values.check.toString());
    if (values.cv) {
      formData.append("cv", values.cv);
    }

    // Вывод данных в консоль перед отправкой
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/job`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const allowedFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"];
  const maxSizeInBytes = 2 * 1024 * 1024; 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!allowedFileTypes.includes(file.type)) {
        alert("Invalid file type. Only PDF, DOC, DOCX and TXT are accepted.");
        setValue("cv", null);
        if (inputFileRef.current) {
          inputFileRef.current.value = "";
        }
        return;
      }
      if (file.size > maxSizeInBytes) {
        alert("The file is too large. Maximum size 2MB.");
        setValue("cv", null);
        if (inputFileRef.current) {
          inputFileRef.current.value = "";
        }
        return;
      }
      setValue("cv", file);
    }
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

      <div className={styles.input_box}>
        <label className={styles.description}>
          Bemerkung:
          <textarea {...register("description")} />
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
            onChange={handleFileChange}
            ref={inputFileRef}
            className={styles.file}
            type="file"
          />
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
