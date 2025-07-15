import { GovernmentRegulatoryActorsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GovernmentRegulatoryActorsPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Government & Regulatory Actors`}
      src={GovernmentRegulatoryActorsImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default GovernmentRegulatoryActorsPage;
