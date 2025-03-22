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

const FormInput = (props: FormInputProps) => {
  // console.log(props);
  const { name, type, label, placeholder, defaultValue, className } = props;
  return (
    <div className="mb-2">
      <Label htmlFor={name} className={`${className} capitalize`}>
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormInput;
