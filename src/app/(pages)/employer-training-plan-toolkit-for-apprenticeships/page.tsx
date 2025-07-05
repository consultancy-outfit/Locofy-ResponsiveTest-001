"use client";

import { EmployerTrainingPlanToolkitForApprenticeshipsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const EmployerTrainingPlanToolkitForApprenticeshipsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey  / Apprenticeship Documents / Employer-Training-Plan-Toolkit-for-Apprenticeships`}
      src={EmployerTrainingPlanToolkitForApprenticeshipsImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="/employer-training-plan-toolkit-for-apprenticeships"
    />
  );
};

export default EmployerTrainingPlanToolkitForApprenticeshipsPage;
