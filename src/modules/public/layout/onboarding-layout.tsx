import { Progress } from "@/components/ui/progress";
import { useState, type FC } from "react";
import type { OnboardingLayoutProps } from "./types/onboarding-layout-types";
import Step_1 from "@/modules/customer/pages/onboarding/step-1";
import Step_2 from "@/modules/customer/pages/onboarding/step-2";
import Step_3 from "@/modules/customer/pages/onboarding/step-3";
import Step_4 from "@/modules/customer/pages/onboarding/step-4";
import Step_5 from "@/modules/customer/pages/onboarding/step-5";
import Step_6 from "@/modules/customer/pages/onboarding/step-6";
import CommonButton from "@/components/common/button/common-button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OnboardingLayout: FC<OnboardingLayoutProps> = () => {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(1);

  const stepsName: Record<number, string> = {
    1: "Basic Info",
    2: "Basic Info",
    3: "Business Info",
    4: "Project Preferences",
    5: "Contact & Payment",
    6: "Email Verification",
  };

  const stepValues = {
    1: 2,
    2: 20,
    3: 30,
    4: 45,
    5: 60,
    6: 1,
  };

  const handleNextSteps = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevSteps = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="bg-[#FCFCFC] border border-[#EEEEEE] rounded-[12px] p-6 px-16">
      <div className="flex justify-between items-center">
        <h5 className="text-[20px] font-DM-Sans">
          Step {currentStep} to {totalSteps}
        </h5>
        <p>{stepsName[currentStep]}</p>
      </div>
      <Progress
        value={stepValues[currentStep]}
        className="bg-neutral-200 my-6"
      />
      <div className="mt-10">
        {currentStep === 1 && <Step_1 />}
        {currentStep === 2 && <Step_2 />}
        {currentStep === 3 && <Step_3 />}
        {currentStep === 4 && <Step_4 />}
        {currentStep === 5 && <Step_5 />}
        {currentStep === 6 && <Step_6 />}
      </div>
      <div className="flex justify-between items-center mt-12">
        <CommonButton
          variant="ghost"
          label="Back"
          leftIcon={<ArrowLeft />}
          onClick={handlePrevSteps}
          disabled={currentStep === 1}
          className="border border-[#DEDEDE] text-dark-gray h-11 w-28"
        />
        <CommonButton
          label="Continue"
          rightIcon={<ArrowRight />}
          onClick={handleNextSteps}
          disabled={currentStep === totalSteps}
          className="bg-gradient-to-tr from-[#004999] to-[#007AFF] h-11 w-32"
        />
      </div>
    </div>
  );
};

export default OnboardingLayout;
