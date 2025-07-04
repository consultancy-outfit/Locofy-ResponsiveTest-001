"use client";

import { ProgressReviewAndTargetSettingReportImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ProgressReviewAndTargetSettingReportPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Document / Progress Reviews and Target Setting: Supporting Apprentices to Succeed`}
      src={ProgressReviewAndTargetSettingReportImage}
      backRoute="/"
      amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default ProgressReviewAndTargetSettingReportPage;
