import { createClient } from "@supabase/supabase-js";

const bucket_name = "location-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload image using standard upload
export async function uploadImage(image: File) {
  const timeStamp = Date.now();
  const newName = `${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket_name)
    .upload(newName, image,{
      cacheControl:'3600'
    });

  if (!data) throw new Error("Image upload failed", error);
    const publicUrl = supabase.storage.from(bucket_name).getPublicUrl(newName).data.publicUrl
  return publicUrl
}
