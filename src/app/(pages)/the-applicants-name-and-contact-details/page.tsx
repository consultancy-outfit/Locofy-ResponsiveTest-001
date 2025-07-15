import { TheApplicantsNameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheApplicantsNameAndContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`The applicants name and contact details`}
      src={TheApplicantsNameAndContactDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default TheApplicantsNameAndContactDetailsPage;
