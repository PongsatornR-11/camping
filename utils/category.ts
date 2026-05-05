import {
  Tent,
  House,
  Mountain,
  Store,
  Utensils,
  Hotel,
  Bed,
  TreePalm,
} from "lucide-react";
import React from "react";

type Category = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const categories: Category[] = [
  { label: "Camping", icon: Tent },
  { label: "House", icon: House },
  { label: "Hotel", icon: Hotel },
  { label: "Hostel", icon: Bed },
  { label: "Mountain", icon: Mountain },
  { label: "Store", icon: Store },
  { label: "Beach", icon: TreePalm },
  { label: "Restaurant", icon: Utensils },
];