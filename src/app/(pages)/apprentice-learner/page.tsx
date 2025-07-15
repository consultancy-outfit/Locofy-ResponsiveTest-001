import { ApprenticeLearnerImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApprenticeLearnerPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprentice/ Learner`}
      src={ApprenticeLearnerImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default ApprenticeLearnerPage;
