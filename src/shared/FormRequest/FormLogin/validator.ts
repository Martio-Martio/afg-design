import { z } from "zod";

export const FormSchema = z.object({
  username: z.string().toLowerCase().min(3, {
    message: "L'username doit comporter au moins 3 caractères.",
  }),
  password: z.string().min(8, {
    message: "Le mot de passe doit comporter au moins 8 caractères.",
  }),
});
