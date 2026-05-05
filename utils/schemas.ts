import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters",
  }),
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
});

const validateImage = () => {
  const maxSize = 1024 * 1024;
  return z.instanceof(File).refine(
    (file) => file.size <= maxSize,
    { message: "File size must be less than 1 MB!" }
  );
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(30, { message: "Name must be less than 30 characters" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "Description must be at least 2 characters" })
    .max(200, { message: "Description must be less than 200 characters" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Price cannot be negative" }),
  province: z.string(),
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
});

export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};