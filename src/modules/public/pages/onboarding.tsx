import BackButton from "../components/common/back-button";
import { cn } from "@/lib/utils";
import { onboardingList } from "../constants/onboarding-list";
import CommonButton from "@/components/common/button/common-button";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackButton />
      <h1 className="lg:mt-4 mt-12">Welcome Onboard!</h1>
      <div className="flex flex-col items-start mt-4 lg:mx-0 sm:mx-14">
        <h4 className="md:ms-0 ms-4">Continue as...</h4>
        <p className="text-dark-gray md:ms-0 ms-4">
          Let's Begin your journey with us as a..
        </p>
        <div className="flex flex-wrap items-center md:justify-start justify-center gap-4 mt-4">
          {onboardingList.map((item) => (
            <div
              key={item.title}
              className="group lg:w-5/12 sm:w-full w-11/12 h-full relative"
            >
              <div
                className={cn(
                  "absolute w-full h-full rounded-2xl bg-black/40",
                  "transform transition-colors duration-300 ease-in-out",
                  "group-hover:bg-black/80"
                )}
              />
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="object-cover rounded-2xl w-full h-full"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CommonButton
                  label={item.btnLabel}
                  className="bg-secondary hover:bg-secondary text-white h-11 px-8"
                  onClick={() => navigate(item.navigate)}
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex flex-col ms-4 text-white opacity-100 group-hover:opacity-0">
                <h4 className="sub-heading">{item.title}</h4>
                <p className="caption">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
