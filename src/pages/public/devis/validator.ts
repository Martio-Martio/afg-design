import { z } from "zod";

export const FormSchema = z.object({
  description: z.string().toLowerCase().min(3, {
    message: "L'username doit comporter au moins 3 caractères.",
  }),
  type_service: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Vous devez choisir au moins un élément.",
  }),
});
