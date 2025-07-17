import { StepByStepCqcApplicationProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StepByStepCqcApplicationProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Step-by-Step CQC Application Process`}
      src={StepByStepCqcApplicationProcessImage}
      backRoute="/how-the-process-works"
    />
  );
};

export default StepByStepCqcApplicationProcessPage;
