
import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import React from "react";

const createProfileAction = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;

  // validate the form data
  // insert the data into the database
  // return the response
  // console.log(firstName);
};

const createProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 capitalize">new user</h1>
      <div className="border p-4 rounded-md shadow-md max-w-lg">
        <form action={createProfileAction}>
          <FormInput name='firstName' label="First Name" type="text"/>
          <Button type="submit" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default createProfile;
