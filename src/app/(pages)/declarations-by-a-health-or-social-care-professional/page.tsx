import { DeclarationsByAHealthOrSocialCareProfessionalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeclarationsByAHealthOrSocialCareProfessionalPage = () => {
  return (
    <CommonPage
      pageTitle={`Declarations by a health or social care professional `}
      src={DeclarationsByAHealthOrSocialCareProfessionalImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DeclarationsByAHealthOrSocialCareProfessionalPage;
