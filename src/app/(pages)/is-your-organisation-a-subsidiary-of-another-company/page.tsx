import { IsYourOrganisationASubsidiaryOfAnotherCompanyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IsYourOrganisationASubsidiaryOfAnotherCompanyPage = () => {
  return (
    <CommonPage
      pageTitle={`Is your organisation a subsidiary of another company`}
      src={IsYourOrganisationASubsidiaryOfAnotherCompanyImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default IsYourOrganisationASubsidiaryOfAnotherCompanyPage;
