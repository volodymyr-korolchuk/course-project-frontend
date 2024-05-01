import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, {
      message: "First Name is required.",
    })
    .max(28),
  lastName: z.string().min(1, { message: "Last Name is required." }).max(28),
  email: z.string().email({ message: "Valid email required." }),
  phoneNumber: z.string().max(15, { message: "Valid phone number required." }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" })
    .max(28),
});
