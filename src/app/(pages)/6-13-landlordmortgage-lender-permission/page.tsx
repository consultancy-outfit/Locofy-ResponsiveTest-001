import { LandlordMortgageLenderPermissionImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LandlordMortgageLenderPermissionPage = () => {
  return (
    <CommonPage
      pageTitle={`Landlord/Mortgage lender permission`}
      src={LandlordMortgageLenderPermissionImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default LandlordMortgageLenderPermissionPage;
