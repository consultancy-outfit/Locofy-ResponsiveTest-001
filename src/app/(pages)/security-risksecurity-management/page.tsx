import { SecurityRiskSecurityManagementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SecurityRiskSecurityManagementPage = () => {
  return (
    <CommonPage
      pageTitle="Security & Risk/Security Management"
      src={SecurityRiskSecurityManagementImage}
      backRoute="/"
    />
  );
};

export default SecurityRiskSecurityManagementPage;
