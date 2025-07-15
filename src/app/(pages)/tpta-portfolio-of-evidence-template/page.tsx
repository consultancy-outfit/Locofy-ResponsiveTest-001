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
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/danish_qamar_consultancyoutfit_co_uk/EcJ3fjPvAHhChj4ghLHL29sBUEHGO9ilv1kJcujhtgmVyA?e=85KCGx"
    />
  );
};

export default TptaPortfolioOfEvidenceTemplatePage;
