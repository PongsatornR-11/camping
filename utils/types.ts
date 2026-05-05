export type ActionState = {
  message: string;
  redirect?: string;
};

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