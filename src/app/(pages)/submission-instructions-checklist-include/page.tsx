import { SubmissionInstructionsChecklistIncludeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmissionInstructionsChecklistIncludePage = () => {
  return (
    <CommonPage
      pageTitle={`Submission Instructions (Checklist include)`}
      src={SubmissionInstructionsChecklistIncludeImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default SubmissionInstructionsChecklistIncludePage;
