import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  className?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = ({ name, type, label, placeholder, defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;