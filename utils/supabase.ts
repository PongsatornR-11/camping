import { createClient } from "@supabase/supabase-js";

const bucketName = "location-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

if (!url || !key) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY environment variables");
}

const supabase = createClient(url, key);

export async function uploadImage(image: File) {
  const timeStamp = Date.now();
  const newName = `${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(newName, image, {
      cacheControl: "3600",
    });

  if (error || !data) {
    throw new Error(`Image upload failed: ${error?.message ?? "Unknown error"}`);
  }

  const publicUrl = supabase.storage.from(bucketName).getPublicUrl(newName).data.publicUrl;
  return publicUrl;
}