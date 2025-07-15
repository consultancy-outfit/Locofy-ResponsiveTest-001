import { StatementOfPurposeImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementOfPurposePage = () => {
  return (
    <CommonPage
      pageTitle={`Statement of Purpose`}
      src={StatementOfPurposeImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default StatementOfPurposePage;
