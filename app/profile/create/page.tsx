import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProfileAction } from "@/actions/action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfile = async () => {
  const user = await currentUser();
  if (user?.privateMetadata.haveProfile) redirect("/");

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 capitalize">New User</h1>
      <div className="border p-4 rounded-md shadow-md">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
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
          <SubmitButton text="Create Profile" size="default" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;