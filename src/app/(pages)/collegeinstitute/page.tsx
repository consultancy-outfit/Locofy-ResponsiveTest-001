import { CollegeInstituteImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CollegeInstitutePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / College/Institute`}
      src={CollegeInstituteImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default CollegeInstitutePage;
