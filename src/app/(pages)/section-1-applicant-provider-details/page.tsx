import { Section1ApplicantProviderDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section1ApplicantProviderDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 1: Applicant & Provider Details`}
      src={Section1ApplicantProviderDetailsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default Section1ApplicantProviderDetailsPage;
