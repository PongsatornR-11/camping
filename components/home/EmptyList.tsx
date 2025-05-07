import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EmptyList = ({
  heading = "No location found",
  message = "Please try again later.",
  btnText = "Go back",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center mt-10">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p className="my-3">{message}</p>
      <Button className="capitilize" asChild>
        <Link href='/'>
        {btnText}
        </Link>
        </Button>
    </div>
  );
};

export default EmptyList;
