"use client";

import { WtdLevyNonLevryAgreementv1CompatibilityModeImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WtdLevyNonLevryAgreementv1CompatibilityModePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / WTD Levy & Non-Levry Agreementv1- compatibility Mode`}
      src={WtdLevyNonLevryAgreementv1CompatibilityModeImage}
      backRoute="/"
      amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default WtdLevyNonLevryAgreementv1CompatibilityModePage;
