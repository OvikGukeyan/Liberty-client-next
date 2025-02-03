import { z } from "zod";


export const contactFormSchema = z.object({
    salutation: z.string(),
    titel: z.string().optional(),
    firstName: z.string().min(2, { message: 'Der Vorname muss mindestens 2 Zeichen lang sein' }),
    lastName: z.string().min(2, { message: 'Der Nachname muss mindestens 2 Zeichen lang sein' }),
    email: z.string().email({ message: 'Geben Sie eine gültige E-Mail-Adresse ein' }),
    phoneNumber: z.string().min(10, { message: 'Die Telefonnummer muss mindestens 10 Zeichen lang sein' }),
    address: z.string().min(5, { message: 'Ungültige Adresse' }),
    zipCode: z.string().min(5, { message: 'Ungültige Postleitzahl' }),
    city: z.string().min(2, { message: 'Ungültige Stadt' }),
    country: z.string().min(2, { message: 'Ungültiges Land' }),
    topic: z.array(z.enum(['baufinanzierung', 'privatkredit', 'modernisierungsdarlehen', 'versicherung', 'kapitalaufbau', 'immobilien', 'modernisierungsdarlehen', 'kapitalbeschaffung'])).min(1, {
        message: "Bitte wählen Sie mindestens ein Thema aus",
    }),
    description: z.string().optional(),
    check: z.boolean().refine((value) => value, {
        message: "Sie müssen den Bedingungen zustimmen",
    }),
    manager: z.string().optional(),
});

export type TFormContactValues = z.infer<typeof contactFormSchema>;
