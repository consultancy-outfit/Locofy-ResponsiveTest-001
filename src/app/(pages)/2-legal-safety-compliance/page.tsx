import { LegalSafetyComplianceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LegalSafetyCompliancePage = () => {
  return (
    <CommonPage
      pageTitle={`Legal & Safety Compliance`}
      src={LegalSafetyComplianceImage}
      backRoute="/additional-location-form-for-new-provider-registration-applications-2"
    />
  );
};

export default LegalSafetyCompliancePage;
