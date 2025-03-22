import {
  Tent,
  House,
  Mountain,
  Store,
  Utensils,
  Hotel,
  Bed,
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
    label: "food",
    icon: Utensils,
  },
];
