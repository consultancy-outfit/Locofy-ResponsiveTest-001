import { EmploymentHistoryImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmploymentHistoryPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Employment History`}
      src={EmploymentHistoryImage2}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default EmploymentHistoryPage2;
