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

export const SubmitButton = ({ className, size, text }: SubmitButtonProps) => {
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
        text
      )}
    </Button>
  );
};

export const SignInFavButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline" aria-label="Sign in to favorite">
        <Heart className="fill-current" />
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
      size="icon"
      variant="outline"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {pending ? (
        <LoaderCircle className="animate-spin" />
      ) : isFavorite ? (
        <Heart className="fill-current" />
      ) : (
        <Heart />
      )}
    </Button>
  );
};