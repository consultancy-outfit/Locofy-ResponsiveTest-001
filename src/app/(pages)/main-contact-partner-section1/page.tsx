import { MainContactPartnerImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MainContactPartnerPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Main contact partner`}
      src={MainContactPartnerImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MainContactPartnerPage1;
