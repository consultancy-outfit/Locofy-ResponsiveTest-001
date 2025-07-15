import { IsYourPartnershipAFranchiseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IsYourPartnershipAFranchisePage = () => {
  return (
    <CommonPage
      pageTitle={`Is your partnership a franchise?`}
      src={IsYourPartnershipAFranchiseImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default IsYourPartnershipAFranchisePage;
