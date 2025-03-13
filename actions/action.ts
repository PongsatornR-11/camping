"use server";
import { profileSchema, validateWithZod } from "@/utils/schemas";
import { currentUser } from "@clerk/nextjs/server";

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Please login to create a profile");
  }
  return user;
};

const processError = (error: unknown): { message: string } => {
  return {
    message:
      error instanceof Error ? error.message : "An Error Occured in server",
  };
};

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  // validate the form data
  try {
    // get the current user
    const user = await getAuthUser();

    const rawData = Object.fromEntries(formData);
    const validatedField = validateWithZod(profileSchema, rawData);
    console.log("validatedField ", validatedField);

    // insert the data into the database
    // return the response
    return { message: "Create Profile Success!!" };
  } catch (error) {
    console.log(error);
    return processError(error);
  }
};
