import { OverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Overview`}
      src={OverviewImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default OverviewPage;
