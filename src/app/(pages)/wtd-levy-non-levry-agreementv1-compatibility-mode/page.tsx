"use client";

import { WtdLevyNonLevryAgreementv1CompatibilityModeImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WtdLevyNonLevryAgreementv1CompatibilityModePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`WTD Levy & Non-Levy Agreement V1`}
      src={WtdLevyNonLevryAgreementv1CompatibilityModeImage}
      backRoute="/onboarding-initial-setup"
    />
  );
};

export default WtdLevyNonLevryAgreementv1CompatibilityModePage;
