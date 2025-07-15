"use client";

import { PortfolioAssessmentEvidenceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PortfolioAssessmentEvidencePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship funding Rules / portfolio-assessment-evidence`}
      src={PortfolioAssessmentEvidenceImage}
      backRoute="/portfolio-assessment-evidence-cards"
    />
  );
};

export default PortfolioAssessmentEvidencePage;
