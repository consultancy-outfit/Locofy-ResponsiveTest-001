import { BuildingRegulationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuildingRegulationsPage = () => {
  return (
    <CommonPage
      pageTitle={`6.4 Building regulations`}
      src={BuildingRegulationsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default BuildingRegulationsPage;
