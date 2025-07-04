"use client";

import { IndividualLearnerProgressReviewFormImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IndividualLearnerProgressReviewFormPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Individual Learner Progress Review Form`}
      src={IndividualLearnerProgressReviewFormImage}
      backRoute="/"
      amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default IndividualLearnerProgressReviewFormPage;
