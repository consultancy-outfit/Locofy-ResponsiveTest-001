import { PlanningConsentImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PlanningConsentPage = () => {
  return (
    <CommonPage
      pageTitle={`6.10 Planning consent`}
      src={PlanningConsentImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default PlanningConsentPage;
