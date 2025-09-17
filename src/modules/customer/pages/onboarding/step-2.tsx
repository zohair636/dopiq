import {
  FormFieldWrapper,
  FormProvider,
} from "@/components/common/form-provider/form-provider";
import CommonInput from "@/components/common/input/common-input";

const Step_2 = () => {
  return (
    <div>
      <h2 className="text-2xl font-DM-Sans text-dark-gray font-semibold mb-0.5">
        Set Your Credentials
      </h2>
      <h6 className="text-sm font-DM-Sans text-neutral-500">
        Keep your account Secure by setting unique credentials
      </h6>
      <FormProvider
        onSubmit={() => {}}
        defaultValues={{ password: "", confirm_password: "" }}
      >
        <div className="flex items-center gap-6 mt-8">
          <FormFieldWrapper name="password">
            {(field) => (
              <CommonInput
                placeholder="Enter your Password"
                label="Password"
                {...field}
              />
            )}
          </FormFieldWrapper>
          <FormFieldWrapper name="confirm_password">
            {(field) => (
              <CommonInput
                placeholder="Re enter your Password"
                label="Confirm Password"
                {...field}
              />
            )}
          </FormFieldWrapper>
        </div>
      </FormProvider>
    </div>
  );
};

export default Step_2;
