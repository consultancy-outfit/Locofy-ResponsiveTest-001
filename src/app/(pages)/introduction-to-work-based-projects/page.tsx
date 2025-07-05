"use client";

import { IntroductionToWorkBasedProjectsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IntroductionToWorkBasedProjectsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents /  Introduction to Work-Based Projects`}
      src={IntroductionToWorkBasedProjectsImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="/introduction-to-work-based-projects"
    />
  );
};

export default IntroductionToWorkBasedProjectsPage;
