"use client";

import { IndividualLearningPlanTemplateImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IndividualLearningPlanTemplatePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Individual_Learning_Plan_Template`}
      src={IndividualLearningPlanTemplateImage}
      backRoute="/onboarding-initial-setup"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/muneeb_asif_consultancyoutfit_co_uk/EVeMb-e380lDtdd7Rgpq8Z8BpS5yuBFDYbRdeje7pAcvXA?e=Bg5HO8"
    />
  );
};

export default IndividualLearningPlanTemplatePage;
