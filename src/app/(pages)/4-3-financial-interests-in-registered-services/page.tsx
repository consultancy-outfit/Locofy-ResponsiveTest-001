import { FinancialInterestsInRegisteredServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FinancialInterestsInRegisteredServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`4.3  Financial interests in registered services`}
      src={FinancialInterestsInRegisteredServicesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default FinancialInterestsInRegisteredServicesPage;
