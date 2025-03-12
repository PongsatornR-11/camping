"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  // validate the form data
  try {
    const rawData = Object.fromEntries(formData);
    const validatedField = validateWithZod(profileSchema, rawData);
    console.log("validatedField ", validatedField);

    // insert the data into the database
    // return the response
    return { message: "Create Profile Success!!" };
  } catch (error) {
    console.log(error);
    return { message: error.message || 'Server error' };
  }
};
