"use client";

import { TptaPortfolioOfEvidenceTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TptaPortfolioOfEvidenceTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / tpta-portfolio-of-evidence-template`}
      src={TptaPortfolioOfEvidenceTemplateImage}
     backRoute="/portfolio-assessment-evidence-cards"
    />
  );
};

export default TptaPortfolioOfEvidenceTemplatePage;
