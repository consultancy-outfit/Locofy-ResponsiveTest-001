import { EmploymentHistoryImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmploymentHistoryPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Employment History`}
      src={EmploymentHistoryImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default EmploymentHistoryPage1;
