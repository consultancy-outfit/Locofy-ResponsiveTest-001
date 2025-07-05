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
      amendmentButtonRoute="/individual-learner-progress-review-form"
    />
  );
};

export default IndividualLearnerProgressReviewFormPage;
