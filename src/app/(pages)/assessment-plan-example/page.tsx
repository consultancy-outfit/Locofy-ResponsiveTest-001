"use client";

import { AssessmentPlanExampleImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AssessmentPlanExamplePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey  / Apprenticeship Documents  / Assessment Plan Example`}
      src={AssessmentPlanExampleImage}
      backRoute="/portfolio-assessment-evidence-cards"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/danish_qamar_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdanish%5Fqamar%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FAssessment%20Plan%20Example%2Epdf&parent=%2Fpersonal%2Fdanish%5Fqamar%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default AssessmentPlanExamplePage;
