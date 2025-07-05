"use client";

import { CompletedApprenticeProgressReviewExemplarWordDocImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const CompletedApprenticeProgressReviewExemplarWordDocPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / completed-apprentice-progress-review-exemplar-word-doc`}
      src={CompletedApprenticeProgressReviewExemplarWordDocImage}
      backRoute="/progress-reviews-tracking"
      // amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default CompletedApprenticeProgressReviewExemplarWordDocPage;
