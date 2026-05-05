import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createCampAction } from "@/actions/action";
import CategoryInput from "@/components/form/CategoryInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import ProvinceInput from "@/components/form/Province";
import ImageInput from "@/components/form/ImageInput";
import MapWrapper from "@/components/map/MapWrapper";

const CreateCamp = () => {
  return (
    <section>
      <div className="border p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-6">
          Create Landmark Location
        </h1>
        <FormContainer action={createCampAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              label="Location name"
              name="name"
              type="text"
              placeholder="Enter location name..."
            />
            <CategoryInput name="category" />
          </div>
          <TextAreaInput name="description" rows={4} />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              label="Price (THB)"
              name="price"
              type="number"
              placeholder="Enter price..."
            />
            <ProvinceInput name="province" />
          </div>

          <ImageInput />
          <MapWrapper
            location={{ lat: 13.7456, lng: 100.5341 }}
          />
          <SubmitButton text="Create Camp" size="default" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateCamp;