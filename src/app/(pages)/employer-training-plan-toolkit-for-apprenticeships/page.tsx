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
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/iram_bashir_consultancyoutfit_co_uk/EWmqiu4893pGhsTNp6Cfe7IBYFG6MmSPYXFIbR0obgYm6g?e=7DDoqJ"
    />
  );
};

export default EmployerTrainingPlanToolkitForApprenticeshipsPage;
