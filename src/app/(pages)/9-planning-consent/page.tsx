import { PlanningConsentImag } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PlanningConsentPage = () => {
  return (
    <CommonPage
      pageTitle={`Planning consent `}
      src={PlanningConsentImag}
      backRoute="/add-location"
    />
  );
};

export default PlanningConsentPage;
