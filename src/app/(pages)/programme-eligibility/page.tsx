import { ProgrammeEligibilityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProgrammeEligibilityPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Funding Rules / Apprenticeship funding rules 2024_to_2025 / Programme Eligibility`}
      src={ProgrammeEligibilityImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default ProgrammeEligibilityPage;
