import { z } from "zod";
import { passwordSchema } from "./passwordSchema";

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Geben Sie eine gültige E-Mail-Adresse ein' }),
    password: passwordSchema
});

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
