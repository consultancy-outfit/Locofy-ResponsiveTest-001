import { HospiceServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HospiceServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`HOSPICE SERVICES `}
      src={HospiceServicesImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default HospiceServicesPage;
