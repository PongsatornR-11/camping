"use client";
import { ActionState } from "@/utils/types";
import React, { useEffect, useActionState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type FormContainerProps = {
  children: React.ReactNode;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
};

const initialState: ActionState = {
  message: "",
  redirect: undefined,
};

const FormContainer = ({ action, children }: FormContainerProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state.message) {
      toast("", {
        description: state.message,
        position: "top-right",
      });
      if (state.redirect) {
        router.push(state.redirect);
      }
    }
  }, [state, router]);

  return <form action={formAction}>{children}</form>;
};

export default FormContainer;