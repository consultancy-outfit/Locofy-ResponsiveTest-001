import { IsYourBusinessAFranchiseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IsYourBusinessAFranchisePage = () => {
  return (
    <CommonPage
      pageTitle={`Is your business a franchise?`}
      src={IsYourBusinessAFranchiseImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default IsYourBusinessAFranchisePage;
