import { z } from "zod";
import { passwordSchema } from "./passwordSchema";

export const formLoginSchema = z.object({
    email: z.string().email({ message: 'Enter a valid email address' }),
    password: passwordSchema
});

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
