import { z } from "zod";

export const aplicationSchema = z.object({
  firstName: z.string().min(2, {
    message: "Vorname min. 2 Zeichen",
  }),
  lastName: z.string().min(2, {
    message: "Nachname min. 2 Zeichen",
  }),
  email: z.string().email({
    message: "Ungültige E-Mail",
  }),
  phoneNumber: z.string().min(10, {
    message: "Telefon min. 10 Zeichen",
  }),
  description: z.string().optional(),
  communicationMethod: z.enum(["telefonisch", "per E-Mail"]),
  check: z.boolean().refine((value) => value, {
    message: "Bedingungen zustimmen",
  }),
  cv: z
    .instanceof(File)
    .nullable()
    .refine((file) => !file || file.size <= 2 * 1024 * 1024, {
      message: "Datei < 2MB",
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
        message: "Nur PDF, DOC, DOCX, TXT",
      }
    ),
});


export type TFormAplicationValues = z.infer<typeof aplicationSchema>;
