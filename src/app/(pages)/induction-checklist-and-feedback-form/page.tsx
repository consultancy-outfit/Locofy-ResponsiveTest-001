import { InductionChecklistAndFeedbackFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InductionChecklistAndFeedbackFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Induction Checklist and Feedback Form`}
      src={InductionChecklistAndFeedbackFormImage}
      backRoute="/onboarding-and-support-assessment"
    />
  );
};

export default InductionChecklistAndFeedbackFormPage;
