import { ApplicantDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicantDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Applicant Details`}
      src={ApplicantDetailsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default ApplicantDetailsPage;
