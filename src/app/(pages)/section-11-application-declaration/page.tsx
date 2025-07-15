import { Section11ApplicationDeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section11ApplicationDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 11: Application declaration `}
      src={Section11ApplicationDeclarationImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default Section11ApplicationDeclarationPage;
