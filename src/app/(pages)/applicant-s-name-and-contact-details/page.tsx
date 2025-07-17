import { ApplicantSNameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicantSNameAndContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Applicant’s name and contact details`}
      src={ApplicantSNameAndContactDetailsImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default ApplicantSNameAndContactDetailsPage;
