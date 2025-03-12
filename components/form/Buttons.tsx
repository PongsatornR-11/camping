"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

type btnSize = "default" | "lg" | "sm" | "icon";

type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitButton = (props: SubmitButtonProps) => {
  const { className, size, text } = props;
  // console.log(props);
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={size}
      className={`${className} capitalize`}
    >
      {
      pending 
      ? <LoaderCircle className="animate-spin" /> 
      : <p>{text}</p>
      }
    </Button>
  );
};
