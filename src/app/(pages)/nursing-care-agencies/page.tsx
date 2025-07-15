import { NursingCareAgenciesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NursingCareAgenciesPage = () => {
  return (
    <CommonPage
      pageTitle={`7 Nursing Care Agencies`}
      src={NursingCareAgenciesImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default NursingCareAgenciesPage;
