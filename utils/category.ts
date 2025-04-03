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
    label: "house",
    icon: House,
  },
  {
    label: "Temple",
    icon: Church,
  },
  {
    label: "hotel",
    icon: Hotel,
  },
  {
    label: "hostel",
    icon: Bed,
  },
  {
    label: "moutain",
    icon: Mountain,
  },
  {
    label: "store",
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
