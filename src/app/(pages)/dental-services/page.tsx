import { DentalServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DentalServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`Dental Services`}
      src={DentalServicesImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default DentalServicesPage;
