import React from "react";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { provinces } from "@/utils/provinces";

const ProvinceInput = ({
  defaultValue,
  name,
  className,
}: {
  name: string;
  defaultValue?: string;
  className?: string;
}) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {" "}
        {name}
      </Label>
      <Select defaultValue={defaultValue} name={name} required>
        <SelectTrigger>
          <SelectValue placeholder="Province" />
        </SelectTrigger>
        <SelectContent>
          {provinces.map((province, index) => {
            return (
              <SelectItem key={index} value={province.PROVINCE_NAME}>
                <span className={`${className} capitalize flex gap-2`}>
                  {province.PROVINCE_ID}
                  <span>{province.PROVINCE_NAME}</span>
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProvinceInput;