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
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/saqib_hussain_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents%2FProgress%20Review%20and%20Target%20Setting%20Report%2Epdf&parent=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents&ga=1"
    />
  );
};

export default ProgressReviewAndTargetSettingReportPage;
