import { ProgrammeEligibilityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProgrammeEligibilityPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /Programme Eligibility`}
      src={ProgrammeEligibilityImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default ProgrammeEligibilityPage;
