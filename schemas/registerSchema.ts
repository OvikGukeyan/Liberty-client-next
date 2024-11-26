import { z } from "zod";
import { formLoginSchema } from "./loginSchema";
import { passwordSchema } from "./passwordSchema";

export const formRegisterSchema = formLoginSchema.merge(
    z.object({
        firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
        lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
        phoneNumber: z.string().min(10, { message: 'Phone number must be at least 8 characters long' }),
        address: z.string().min(5, { message: 'Invalid address' }),
        company: z.string().optional(),
        zipCode: z.string().min(5, { message: 'Invalid zip code' }),
        city: z.string().min(2, { message: 'Invalid city' }),
        country: z.string().min(2, { message: 'Invalid country' }),
        confirmPassword: passwordSchema,
        check: z.boolean().refine((value) => value, {
            message: "You must agree to the terms",
        }),

    })
).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});

export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
