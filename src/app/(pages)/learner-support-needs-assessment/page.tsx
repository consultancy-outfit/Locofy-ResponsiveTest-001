import { LearnerSupportNeedsAssessmentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LearnerSupportNeedsAssessmentPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Onboarding and Support Assessment / Learner Support Needs Assessment`}
      src={LearnerSupportNeedsAssessmentImage}
      backRoute="/onboarding-and-support-assessment"
    />
  );
};

export default LearnerSupportNeedsAssessmentPage;
