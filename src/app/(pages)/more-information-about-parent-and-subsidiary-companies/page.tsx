import { MoreInformationAboutParentAndSubsidiaryCompaniesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MoreInformationAboutParentAndSubsidiaryCompaniesPage = () => {
  return (
    <CommonPage
      pageTitle={`More information about parent and subsidiary companies`}
      src={MoreInformationAboutParentAndSubsidiaryCompaniesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MoreInformationAboutParentAndSubsidiaryCompaniesPage;
