import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
  placeholder,
  className,
  rows = 4,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
}) => {
  return (
    <div>
      <Label htmlFor={name} className={`${className} capitalize`}>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        rows={rows}
        required
      />
    </div>
  );
};

export default TextAreaInput;