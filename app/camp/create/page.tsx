import React from "react";
import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createCampAction } from "@/actions/action";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/Province";

const createCamp = async () => {
  return (
    <section>
      <div className="border p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-6 capitalize">Create Camp</h1>
        <FormContainer action={createCampAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              label="Camp name"
              name="name"
              type="text"
              placeholder="Enter Camp name..."
            />
            <CategoryInput name="category" />
          </div>
          <TextAreaInput name="description" row={4} />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              label="Camp name"
              name="price"
              type="number"
              placeholder="Enter price..."
            />
            <ProvinceInput name="province" />
          </div>
          <SubmitButton text="create camp" size="default" />
        </FormContainer>
      </div>
    </section>
  );
};

export default createCamp;
