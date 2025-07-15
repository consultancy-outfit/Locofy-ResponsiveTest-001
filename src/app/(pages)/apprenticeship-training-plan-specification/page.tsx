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
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/danish_qamar_consultancyoutfit_co_uk/EePF4NshYH9Kk66U2DE30qcBeOqoMVJOr5c6Rp4_8nqb8Q?e=XGzWFv"
      //
    />
  );
};

export default ApprenticeshipTrainingPlanSpecificationPage;
