"use client";

import { AwdSetaGoodPracticeProgressReviewFormImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AwdSetaGoodPracticeProgressReviewFormPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / AWD-SETA-Good-Practice-Progress-Review-Form`}
      src={AwdSetaGoodPracticeProgressReviewFormImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="/awd-seta-good-practice-progress-review-form"
    />
  );
};

export default AwdSetaGoodPracticeProgressReviewFormPage;
