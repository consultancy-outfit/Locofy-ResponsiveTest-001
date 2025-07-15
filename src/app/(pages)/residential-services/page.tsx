import { ResidentialServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ResidentialServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Residential Services`}
      src={ResidentialServicesImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default ResidentialServicesPage;
