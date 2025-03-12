import FormInput from "@/components/form/FormInput";
import React from "react";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/action";

const createProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 capitalize">new user</h1>
      <div className="border p-4 rounded-md shadow-md">
        <FormContainer action={createProfileAction}>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Enter your first name..."
            />
            <FormInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Enter your last name..."
            />
            <FormInput
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          {/* <FormInput label='Email' name='email' type='email' placeholder='Enter your email'/> */}
          {/* <Button type="submit" size="lg">Submit</Button> */}
          <SubmitButton text="create profile" size="default" />
        </FormContainer>
      </div>
    </section>
  );
};

export default createProfile;
