"use client";

import { EmployerTrainingPlanToolkitForApprenticeshipsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const EmployerTrainingPlanToolkitForApprenticeshipsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Employer-Training-Plan-Toolkit-for-Apprenticeships`}
      src={EmployerTrainingPlanToolkitForApprenticeshipsImage}
      backRoute="/"
      amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default EmployerTrainingPlanToolkitForApprenticeshipsPage;
