import { MedicalHistoryImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MedicalHistoryPage1 = () => {
  return (
    <CommonPage
      pageTitle={`Medical History`}
      src={MedicalHistoryImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MedicalHistoryPage1;
