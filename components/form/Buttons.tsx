"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, LoaderCircle } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

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
      className={`${className} capitalize mt-2`}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export const SignInFavButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart fill="black" />
      </Button>
    </SignInButton>
  );
};

export const FavoriteCardButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button 
      disabled={pending} 
      type="submit" 
      size='icon' 
      variant='outline'
    >
      {
      pending ? 
      (
        <LoaderCircle className="animate-spin" />
      ) 
      : isFavorite ? 
        (
          <Heart className="fill-black dark:fill-white" />
        ) 
      : (
        <Heart />
      )
      }
    </Button>
  );
};
