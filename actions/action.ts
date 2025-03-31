"use server";
import { imageSchema, landmarkSchema, profileSchema, validateWithZod } from "@/utils/schemas";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";
import { uploadImage } from "@/utils/supabase";

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
    return { 
      message: 'Create Profile Success!',
      redirect: '/'
    }
  } catch (error) {
    return processError(error);
  }
  // redirect("/");
};

export const createCampAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string; redirect?: string }> => {
  try {
    // gather datas
    const user = await getUserClerk();
    const rawData = Object.fromEntries(formData)
    const file = formData.get('image')

    //Step 1 Validate Data
    const validatedField = validateWithZod(landmarkSchema, rawData)
    const validatedImage = validateWithZod(imageSchema, {image:file})
    
    //Step 2 Upload Image to database
    const Image_publicURL = await uploadImage(validatedImage.image)
    
    //step 3 Insert to database
    await prisma.landmark.create({
      data:{
        ...validatedField,
        image:Image_publicURL,
        profileId:user.id
      }
    })

    // Return success message with redirect flag
    return { 
      message: 'Create Location Success!',
      redirect: '/'
    }
  } catch (error) {
    return processError(error);
  }
};

export const fetchLocation = async(
  //search 
) =>{
  // const locations = await prisma.landmark.findMany({
  //   orderBy:{
  //     createdAt: 'desc'
  //   }
  // })

  //temporary
  const locations = [
    {
      id: 'bd2a6d54-1bed-48f9-8fe0-7b9af9400529',
      name: 'ythre',
      description: 'ertrety',
      category: 'hotel',
      image: 'https://hiivzcinvtszjzqzyisf.supabase.co/storage/v1/object/public/location-bucket/1743325232815-FamilyCamping.webp',
      province: 'Lopburi',
      lat: 15.00928899385422,
      lng: 100.8487415313721,
      price: 3443,
      createdAt: '2025-03-30T09:00:33.705Z',
      updatedAt: '2025-03-30T09:00:33.705Z',
      profileId: 'user_2uaJNiFD42BdfeRLhE12b4mBMvi'
    }
  ]
  return locations
}