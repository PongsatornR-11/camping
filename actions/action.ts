"use server";
import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";
import { object } from "zod";

const getUserClerk = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("Please login to create a profile");
  }
  // if user doesn't have profile redirect to profile/create
  if (!user.privateMetadata.haveProfile) redirect("/profile/create");
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
    const user = await currentUser();
    if (!user) throw new Error("Please login!");
    if (user.privateMetadata.haveProfile) {
      redirect("/");
    }

    const rawData = Object.fromEntries(formData);
    const validatedField = validateWithZod(profileSchema, rawData);
    console.log("validatedField ", validatedField);

    // insert the data into the database
    await prisma.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validatedField,
      },
    });

    // update metadata in clerk
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        haveProfile: true,
      },
    });

    // return the response
  } catch (error) {
    return processError(error);
  }

  redirect("/");
};

export const createCampAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    // gather datas
    const user = await getUserClerk();
    console.log('user', user)
    const rawData = Object.fromEntries(formData)
    console.log('rawData', rawData)

    //Step 1 Validate Data
    const file = formData.get('image')
    const validatedImage = validateWithZod(imageSchema, {image:file})
    const validatedField = validateWithZod(landmarkSchema, rawData)
    console.log('validateImage', validatedImage)
    console.log('validatedField', validatedField)


    
    //Step 2 Upload Image to database
    //step 3 Insert to database


    return { message: 'Create Camp Success!'}
  } catch (error) {
    return processError(error);
  }
};
