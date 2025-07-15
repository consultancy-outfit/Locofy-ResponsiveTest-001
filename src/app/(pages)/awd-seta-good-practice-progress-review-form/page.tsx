"use client";

import { AwdSetaGoodPracticeProgressReviewFormImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AwdSetaGoodPracticeProgressReviewFormPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / AWD-SETA-Good-Practice-Progress-Review-Form`}
      src={AwdSetaGoodPracticeProgressReviewFormImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/tayyaba_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ftayyaba%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FAWD%2DSETA%2DGood%2DPractice%2DProgress%2DReview%2DForm%2Epdf&parent=%2Fpersonal%2Ftayyaba%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default AwdSetaGoodPracticeProgressReviewFormPage;
