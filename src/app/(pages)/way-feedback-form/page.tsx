"use client";

import { WayFeedbackFormImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WayFeedbackFormPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Way Feedback form`}
      src={WayFeedbackFormImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="/way-feedback-form"
    />
  );
};

export default WayFeedbackFormPage;
