"use client";
import { actionFunction } from "@/utils/types";
import React, { useEffect, useActionState } from "react";
import { toast } from "sonner";

type FormContainerProps = {
  children: React.ReactNode, //thing that can be returned => string, text, number in form of jsx
  action: actionFunction,
};

// initial state for useActionState
const initialState = {
  message: "",
};

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useActionState(action, initialState);
  // console.log("state is ", state); // state is value form return backend function

  useEffect(() => {
    if (state.message) {
      toast('',{
        description: state.message,
        position: 'top-right'
      }
      );
  }}, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
