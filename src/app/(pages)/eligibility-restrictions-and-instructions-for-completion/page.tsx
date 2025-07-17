import { EligibilityRestrictionsAndInstructionsForCompletionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EligibilityRestrictionsAndInstructionsForCompletionPage = () => {
  return (
    <CommonPage
      pageTitle={`Eligibility, Restrictions, and Instructions for Completion`}
      src={EligibilityRestrictionsAndInstructionsForCompletionImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default EligibilityRestrictionsAndInstructionsForCompletionPage;
