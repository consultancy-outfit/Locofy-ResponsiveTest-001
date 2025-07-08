"use client";

import { DiagramsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DiagramsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey  / Apprenticeship Documents / Employer-Training-Plan-Toolkit-for-Apprenticeships / Diagrams`}
      src={DiagramsImage}
      backRoute="/employer-training-plan-toolkit-for-apprenticeships"
      // amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default DiagramsPage;
