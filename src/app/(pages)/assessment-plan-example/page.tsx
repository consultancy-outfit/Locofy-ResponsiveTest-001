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
    />
  );
};

export default AssessmentPlanExamplePage;
