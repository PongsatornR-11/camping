import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
  placeholder,
  className,
  row,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  row?: number
}) => {
  return (
    <div>
      <Label 
        htmlFor={name} 
        className={`${className} capitalize`}
      >
        {labelText || name}
      </Label>

      <Textarea 
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder} 
        rows={row}
        required
      />
    </div>
  );
};

export default TextAreaInput;
