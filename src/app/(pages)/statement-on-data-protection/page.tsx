import { StatementOnDataProtectionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const StatementOnDataProtectionPage = () => {
  return (
    <CommonPage
      pageTitle={`Statement on Data protection`}
      src={StatementOnDataProtectionImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default StatementOnDataProtectionPage;
