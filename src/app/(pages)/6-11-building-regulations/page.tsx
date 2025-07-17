import { BuildingRegulationsImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BuildingRegulationsPage = () => {
  return (
    <CommonPage
      pageTitle={`6.11 Building Regulations `}
      src={BuildingRegulationsImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default BuildingRegulationsPage;
