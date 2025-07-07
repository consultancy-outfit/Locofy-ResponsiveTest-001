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
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:b:/g/personal/danish_qamar_consultancyoutfit_co_uk/ERejGB2tj0pBiCab5Js83PYBseWD7h9rrFKapvn8FwII4A?e=cf1BfQ"
    />
  );
};

export default ApprenticeEmploymentOfferLetterPage;
