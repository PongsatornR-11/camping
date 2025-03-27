import { z, ZodSchema } from "zod";

// profileSchema
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

// imageSchema
const validateImage = () => {
  const maxSize = 1024 * 1024; // not allow file size more than 1 mb
  return z.instanceof(File).refine(
    (file) => {
      return file.size <= maxSize;
    },
    { message: "File size must less than 1 mb!" }
  );
};

export const imageSchema = z.object({
  image: validateImage(),
});

export const landmarkSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please Enter name more than 2 letters" })
    .max(30, { message: "Please Enter name less than 30 letters" }),
  category: z.string(),
  description: z
    .string()
    .min(2, { message: "Please Enter description more than 2 letters" })
    .max(200, { message: "Please Enter description less than 30 letters" }),
  price: z.coerce
    .number()
    .int()
    .min(0, { message: "Price should not lower than 0" }),
  province: z.string(),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
});


export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
};
