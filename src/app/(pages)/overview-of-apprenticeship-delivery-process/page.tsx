import { OverviewOfApprenticeshipDeliveryProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OverviewOfApprenticeshipDeliveryProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Overview of Apprenticeship Delivery Process`}
      src={OverviewOfApprenticeshipDeliveryProcessImage}
      backRoute="/apprenticeship"
    />
  );
};

export default OverviewOfApprenticeshipDeliveryProcessPage;
