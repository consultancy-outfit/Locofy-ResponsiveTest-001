"use client";

import { IndividualLearningPlanTemplateImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IndividualLearningPlanTemplatePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Individual_Learning_Plan_Template`}
      src={IndividualLearningPlanTemplateImage}
      backRoute="/"
      amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default IndividualLearningPlanTemplatePage;
