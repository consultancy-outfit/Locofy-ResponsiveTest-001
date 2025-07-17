import { EligibilityCriteriaImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EligibilityCriteriaPage = () => {
  return (
    <CommonPage
      pageTitle={`Eligibility Criteria`}
      src={EligibilityCriteriaImage}
      backRoute="/application-to-continue-registration-as-a-manager-under-a-new-provide"
    />
  );
};

export default EligibilityCriteriaPage;
