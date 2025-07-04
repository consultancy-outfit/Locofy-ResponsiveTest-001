"use client";

import { SkillScanImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SkillScanPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Skill Scan`}
      src={SkillScanImage}
      backRoute="/"
      amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default SkillScanPage;
