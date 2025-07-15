import { LandlordMortgageLenderPermissionImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LandlordMortgageLenderPermissionPage = () => {
  return (
    <CommonPage
      pageTitle={`6.7 Landlord/Mortgage lender permission`}
      src={LandlordMortgageLenderPermissionImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default LandlordMortgageLenderPermissionPage;
