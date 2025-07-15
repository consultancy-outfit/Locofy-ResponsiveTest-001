import { WhereTheApplicantIsAnOrganisationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WhereTheApplicantIsAnOrganisationPage = () => {
  return (
    <CommonPage
      pageTitle={`Where the applicant is an organisation`}
      src={WhereTheApplicantIsAnOrganisationImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default WhereTheApplicantIsAnOrganisationPage;
