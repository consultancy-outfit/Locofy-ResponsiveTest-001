import { EpaoEndPointAssessmentOrganisationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EpaoEndPointAssessmentOrganisationPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / EPAO (End-Point Assessment Organisation)`}
      src={EpaoEndPointAssessmentOrganisationImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default EpaoEndPointAssessmentOrganisationPage;
