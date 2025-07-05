"use client";

import { ProgressReviewAndTargetSettingReportImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ProgressReviewAndTargetSettingReportPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Document / Progress Reviews and Target Setting: Supporting Apprentices to Succeed`}
      src={ProgressReviewAndTargetSettingReportImage}
      backRoute="/progress-reviews-tracking"
      // amendmentButtonRoute="/progress-review-and-target-setting-report"
    />
  );
};

export default ProgressReviewAndTargetSettingReportPage;
