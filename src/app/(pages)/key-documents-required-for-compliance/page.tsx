import { KeyDocumentsRequiredForComplianceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const KeyDocumentsRequiredForCompliancePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Key Documents Required for Compliance`}
      src={KeyDocumentsRequiredForComplianceImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default KeyDocumentsRequiredForCompliancePage;
