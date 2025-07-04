import { SafeguardingConcernIncidentReportTemplateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SafeguardingConcernIncidentReportTemplatePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Safeguarding-Concern-incident-report-template`}
      src={SafeguardingConcernIncidentReportTemplateImage}
      backRoute="/"
    />
  );
};

export default SafeguardingConcernIncidentReportTemplatePage;
