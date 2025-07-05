import { CheatingPlagiarismPolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CheatingPlagiarismPolicyPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Cheating & Plagiarism Policy`}
      src={CheatingPlagiarismPolicyImage}
      backRoute="/safeguarding-plagiarism-conduct"
    />
  );
};

export default CheatingPlagiarismPolicyPage;
