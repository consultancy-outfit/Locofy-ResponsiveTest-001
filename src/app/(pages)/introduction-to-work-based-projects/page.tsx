"use client";

import { IntroductionToWorkBasedProjectsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IntroductionToWorkBasedProjectsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Introduction to Work-Based Projects`}
      src={IntroductionToWorkBasedProjectsImage}
      backRoute="/"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default IntroductionToWorkBasedProjectsPage;
