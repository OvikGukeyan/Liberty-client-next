import { z } from "zod";


export const contactFormSchema = z.object({
    salutation: z.string().optional(),
    titel: z.string().optional(),
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
    emailAddress: z.string().email({ message: 'Enter a valid email address' }),
    phoneNumber: z.string().min(10, { message: 'Phone number must be at least 8 characters long' }),
    address: z.string().min(5, { message: 'Invalid address' }),
    zipCode: z.string().min(5, { message: 'Invalid zip code' }),
    city: z.string().min(2, { message: 'Invalid city' }),
    country: z.string().min(2, { message: 'Invalid country' }),
    topic: z.array(z.enum(['baufinanzierung', 'privatkredit', 'autokredit', 'versicherung', 'kapitalaufbau', 'immobilien', 'modernisierungsdarlehen', 'kapitalbeschaffung'])).min(1, {
        message: "Please select at least one topic",
    }),
    description: z.string().optional(),
    check: z.boolean().refine((value) => value, {
        message: "You must agree to the terms",
    }),
    manager: z.string().optional(),
});

export type TFormContactValues = z.infer<typeof contactFormSchema>;
