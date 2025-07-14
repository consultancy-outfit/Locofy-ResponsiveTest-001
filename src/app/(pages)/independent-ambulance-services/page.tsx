import { IndependentAmbulanceServicesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IndependentAmbulanceServicesPage = () => {
  return (
    <CommonPage
      pageTitle={`INDEPENDENT AMBULANCE SERVICES`}
      src={IndependentAmbulanceServicesImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default IndependentAmbulanceServicesPage;
