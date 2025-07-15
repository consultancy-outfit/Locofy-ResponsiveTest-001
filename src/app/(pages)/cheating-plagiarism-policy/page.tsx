import { CheatingPlagiarismPolicyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CheatingPlagiarismPolicyPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Cheating & Plagiarism Policy`}
      src={CheatingPlagiarismPolicyImage}
      backRoute="/safeguarding-plagiarism-conduct"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/saqib_hussain_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents%2Fqa%2Dcheating%2D%5F%2Dplagiarism%2Dpolicy%2Epdf&parent=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents&ga=1"
    />
  );
};

export default CheatingPlagiarismPolicyPage;
