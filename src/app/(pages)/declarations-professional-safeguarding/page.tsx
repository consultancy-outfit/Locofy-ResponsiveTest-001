import { DeclarationsProfessionalSafeguardingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeclarationsProfessionalSafeguardingPage = () => {
  return (
    <CommonPage
      pageTitle={`Declarations – Professional & Safeguarding`}
      src={DeclarationsProfessionalSafeguardingImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DeclarationsProfessionalSafeguardingPage;
