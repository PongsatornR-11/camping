export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string; status?: string; redirect?: string }>;

export type locationCardProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  province: string;
  price: number;
  lat: number;
  lng: number;
  createdAt: Date | string;
  updatedAt: Date | string;
};
