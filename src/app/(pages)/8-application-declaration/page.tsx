import { ApplicationDeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`8. Application Declaration`}
      src={ApplicationDeclarationImage}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default ApplicationDeclarationPage;
