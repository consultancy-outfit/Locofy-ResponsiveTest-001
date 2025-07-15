import { PlanningConsentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PlanningConsentPage = () => {
  return (
    <CommonPage
      pageTitle={`6.3 Planning consent`}
      src={PlanningConsentImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default PlanningConsentPage;
