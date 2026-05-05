import React from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/category";

const CategoryInput = ({ defaultValue, name }: { defaultValue?: string; name: string }) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">{name}</Label>
      <Select defaultValue={defaultValue || categories[0].label} name={name} required>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.label} value={category.label}>
              <span className="capitalize flex items-center gap-2">
                <category.icon className="w-4 h-4" />
                {category.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;