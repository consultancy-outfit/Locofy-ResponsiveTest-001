import { Section4ApplicationDeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section4ApplicationDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 4: Application  declaration`}
      src={Section4ApplicationDeclarationImage}
      backRoute="/application-to-continue-registration-as-a-manager-under-a-new-provide"
    />
  );
};

export default Section4ApplicationDeclarationPage;
