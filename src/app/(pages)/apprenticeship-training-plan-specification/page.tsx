"use client";

import { ApprenticeshipTrainingPlanSpecificationImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeshipTrainingPlanSpecificationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Apprenticeship-Training-Plan-Specification`}
      src={ApprenticeshipTrainingPlanSpecificationImage}
      backRoute="/onboarding-initial-setup"
      // 
    />
  );
};

export default ApprenticeshipTrainingPlanSpecificationPage;
