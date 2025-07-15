import { SubmissionImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmissionPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Submission`}
      src={SubmissionImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default SubmissionPage1;
