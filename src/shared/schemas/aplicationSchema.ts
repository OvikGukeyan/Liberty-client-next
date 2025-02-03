import { z } from "zod";

export const aplicationSchema = z.object({
  firstName: z.string().min(2, {
    message: "Der Vorname muss mindestens 2 Zeichen lang sein",
  }),
  lastName: z.string().min(2, {
    message: "Der Nachname muss mindestens 2 Zeichen lang sein",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
  }),
  phoneNumber: z.string().min(10, {
    message: "Die Telefonnummer muss mindestens 10 Zeichen lang sein",
  }),
  description: z.string().optional(),
  communicationMethod: z.enum(["telefonisch", "per E-Mail"]),
  check: z.boolean().refine((value) => value, {
    message: "Sie müssen den Bedingungen zustimmen",
  }),
  cv: z
    .instanceof(File)
    .nullable()
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, {
      message: "Die Datei muss kleiner als 2MB sein",
    })
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
        ].includes(file.type),
      {
        message: "Ungültiger Dateityp. Nur PDF, DOC, DOCX und TXT sind erlaubt",
      }
    ),
});

export type TFormAplicationValues = z.infer<typeof aplicationSchema>;
