import { PreviousRegistrationHistoryImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PreviousRegistrationHistoryPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Previous registration history`}
      src={PreviousRegistrationHistoryImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default PreviousRegistrationHistoryPage1;
