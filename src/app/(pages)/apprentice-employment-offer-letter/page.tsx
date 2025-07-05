"use client";

import { ApprenticeEmploymentOfferLetterImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeEmploymentOfferLetterPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Apprentice Employment Offer Letter`}
      src={ApprenticeEmploymentOfferLetterImage}
      backRoute="/onboarding-initial-setup"
      // amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default ApprenticeEmploymentOfferLetterPage;
