"use client";
import { actionFunction } from "@/utils/types";
import React, { useEffect, useActionState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormContainerProps = {
  children: React.ReactNode, //thing that can be returned => as react? , string, text, number in form of jsx
  action: actionFunction,
};

type ActionState = {
  message: string;
  redirect?: string;
};

// initial state for useActionState
const initialState: ActionState = {
  message: "",
  redirect: "",
};

const FormContainer = ({ action, children }: FormContainerProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, initialState);
  // console.log("state is ", state); // state is value form return backend function

  useEffect(() => {
    if (state.message) {
      toast('',{
        description: state.message,
        position: 'top-right'
      });
      // If there's a redirect path, navigate after showing the toast
      if (state.redirect) {
        router.push(state.redirect);
      }
    }
  }, [state, router]);

  
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
