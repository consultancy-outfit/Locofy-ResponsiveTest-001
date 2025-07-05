"use client";

import { A1aLearningSupportPlanBasicMarch21V11Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const A1aLearningSupportPlanBasicMarch21V11Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / a1a-Learning-Support-Plan-Basic-March-21-V1-1`}
      src={A1aLearningSupportPlanBasicMarch21V11Image}
      backRoute="/onboarding-initial-setup"
      // amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default A1aLearningSupportPlanBasicMarch21V11Page;
