import { SubmissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubmissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Submission`}
      src={SubmissionImage}
      backRoute="/add-a-partner"
    />
  );
};

export default SubmissionPage;
