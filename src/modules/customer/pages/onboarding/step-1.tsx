import {
  FormFieldWrapper,
  FormProvider,
} from "@/components/common/form-provider/form-provider";
import CommonInput from "@/components/common/input/common-input";
import { GallerySvg } from "@/constants/icons";
import React, { useRef, useState } from "react";

const Step_1 = () => {
  const [uploadImage, setUploadImage] = useState<File | null>(null);
  const uploadImageRef = useRef<HTMLInputElement | null>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadImage(file);
    }
  };

  const handleFileUpload = () => {
    uploadImageRef.current?.click();
  };
  return (
    <div>
      <h2 className="text-2xl font-DM-Sans text-dark-gray font-semibold mb-0.5">
        Welcome! Let's get started
      </h2>
      <h6 className="text-sm font-DM-Sans text-neutral-500">
        Select at least one skill that best represents your experience
      </h6>
      <div
        onClick={handleFileUpload}
        className="flex flex-col gap-2 mt-4 cursor-pointer"
      >
        <div className="flex items-center justify-center bg-primary rounded-full p-3 size-14">
          <img
            src={uploadImage ? URL.createObjectURL(uploadImage) : GallerySvg}
            alt="gallery icon"
            loading="lazy"
          />
        </div>
        <p className="text-secondary">Upload your photo</p>
        <CommonInput
          ref={uploadImageRef}
          type="file"
          onChange={handleUploadImage}
          className="hidden"
          accept="image/*"
        />
      </div>
      <FormProvider
        onSubmit={() => {}}
        defaultValues={{ first_name: "", last_name: "" }}
      >
        <div className="flex items-center gap-6 mt-8">
          <FormFieldWrapper name="first_name">
            {(field) => (
              <CommonInput
                placeholder="Enter your first name"
                label="First Name"
                {...field}
              />
            )}
          </FormFieldWrapper>
          <FormFieldWrapper name="last_name">
            {(field) => (
              <CommonInput
                placeholder="Enter your last name"
                label="Last Name"
                {...field}
              />
            )}
          </FormFieldWrapper>
        </div>
      </FormProvider>
    </div>
  );
};

export default Step_1;
