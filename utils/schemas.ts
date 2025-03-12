import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name is required and must be more than 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required and must be more than 2 characters",
  }),
  userName: z.string().min(2, {
    message: "User name is required and must be more than 2 characters",
  }),
});

export const validateWithZod = (schema: ZodSchema<T>, data: unknown):T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};