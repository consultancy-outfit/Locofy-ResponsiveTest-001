import { InitialAssessmentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InitialAssessmentPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /Initial Assessment`}
      src={InitialAssessmentImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default InitialAssessmentPage;
