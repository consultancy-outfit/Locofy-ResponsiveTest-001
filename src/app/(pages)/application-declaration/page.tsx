import { ApplicationDeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Application declaration`}
      src={ApplicationDeclarationImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default ApplicationDeclarationPage;
