"use client";

import { IndividualLearningPlanTemplateImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IndividualLearningPlanTemplatePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Individual_Learning_Plan_Template`}
      src={IndividualLearningPlanTemplateImage}
     backRoute="/onboarding-initial-setup"
      // 
    />
  );
};

export default IndividualLearningPlanTemplatePage;
