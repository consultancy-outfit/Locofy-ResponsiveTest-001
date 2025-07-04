"use client";

import { ApprenticeshipTrainingPlanSpecificationImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeshipTrainingPlanSpecificationPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Apprenticeship-Training-Plan-Specification`}
      src={ApprenticeshipTrainingPlanSpecificationImage}
      backRoute="/"
      amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default ApprenticeshipTrainingPlanSpecificationPage;
