import { IsYourOrganisationAFranchiseImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IsYourOrganisationAFranchisePage = () => {
  return (
    <CommonPage
      pageTitle={`Is Your Organisation a Franchise`}
      src={IsYourOrganisationAFranchiseImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default IsYourOrganisationAFranchisePage;
