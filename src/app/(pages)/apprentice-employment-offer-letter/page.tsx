"use client";

import { ApprenticeEmploymentOfferLetterImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeEmploymentOfferLetterPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Apprentice Employment Offer Letter`}
      src={ApprenticeEmploymentOfferLetterImage}
      backRoute="/onboarding-initial-setup"
      // 
    />
  );
};

export default ApprenticeEmploymentOfferLetterPage;
