import { SubmissionProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmissionProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Submission Process`}
      src={SubmissionProcessImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default SubmissionProcessPage;
