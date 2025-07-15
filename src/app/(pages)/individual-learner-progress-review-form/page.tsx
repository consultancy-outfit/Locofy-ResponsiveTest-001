"use client";

import { IndividualLearnerProgressReviewFormImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IndividualLearnerProgressReviewFormPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents  / Individual Learner Progress Review Form`}
      src={IndividualLearnerProgressReviewFormImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/muneeb_asif_consultancyoutfit_co_uk/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Forcalo%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FIndividual%20Learner%20progress%20review%202%2Epdf&correlation=fe6bafa1%2Dd08a%2Dd000%2D3c6e%2D263d63354c07&Type=item&name=2db11a6e%2D4651%2D4eb9%2Da05a%2D56c23187f161&listItemId=380&listItemUniqueId=ebad48a8%2D302a%2D401c%2Da65d%2Dd11cc27930ce"
    />
  );
};

export default IndividualLearnerProgressReviewFormPage;
