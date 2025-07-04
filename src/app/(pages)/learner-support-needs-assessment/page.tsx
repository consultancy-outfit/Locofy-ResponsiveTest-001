import { LearnerSupportNeedsAssessmentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LearnerSupportNeedsAssessmentPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Learner Support Needs Assessment`}
      src={LearnerSupportNeedsAssessmentImage}
      backRoute="/"
    />
  );
};

export default LearnerSupportNeedsAssessmentPage;
