import {
  Tent,
  House,
  Mountain,
  Store,
  Utensils,
  Hotel,
  Bed,
  Church,
  TreePalm,
} from "lucide-react";
import React from "react";

type categories = {
  label: string;
  icon: React.ComponentType;
};

export const categories: categories[] = [
  {
    label: "camping",
    icon: Tent,
  },
  {
    label: "House",
    icon: House,
  },
  {
    label: "hotel",
    icon: Hotel,
  },
  {
    label: "Hostel",
    icon: Bed,
  },
  {
    label: "moutain",
    icon: Mountain,
  },
  {
    label: "Store",
    icon: Store,
  },
  
  {
    label: "Beach",
    icon: TreePalm,
  },
  {
    label: "Restaurant",
    icon: Utensils,
  },
];
