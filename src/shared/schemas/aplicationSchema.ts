import { z } from "zod";

export const aplicationSchema = z.object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Enter a valid email address' }),
    phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 characters long' }),
    description: z.string().optional(),
    communicationMethod: z.enum(["telefonisch", "per E-Mail"]),
    check: z.boolean().refine((value) => value, {
        message: "You must agree to the terms",
    }),
    cv: z
        .instanceof(File)
        .nullable() 
        .refine((file) => !file || file.size <= 2 * 1024 * 1024, {
            message: "The file must be smaller than 2MB",
        })
        .refine((file) => !file || ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"].includes(file.type), {
            message: "Invalid file type. Only PDF, DOC, DOCX, and TXT are allowed",
        }),
})

export type TFormAplicationValues = z.infer<typeof aplicationSchema>;