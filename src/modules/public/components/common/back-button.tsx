import CommonButton from "@/components/common/button/common-button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <CommonButton
        variant="ghost"
        onClick={() => navigate(-1)}
        className="border border-neutral-300 hidden lg:block"
        leftIcon={<ArrowLeft />}
      />
    </div>
  );
};

export default BackButton;
