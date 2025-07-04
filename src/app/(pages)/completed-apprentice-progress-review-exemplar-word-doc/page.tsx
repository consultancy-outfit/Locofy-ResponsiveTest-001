"use client";

import { CompletedApprenticeProgressReviewExemplarWordDocImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const CompletedApprenticeProgressReviewExemplarWordDocPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / completed-apprentice-progress-review-exemplar-word-doc`}
      src={CompletedApprenticeProgressReviewExemplarWordDocImage}
      backRoute="/"
      amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default CompletedApprenticeProgressReviewExemplarWordDocPage;
