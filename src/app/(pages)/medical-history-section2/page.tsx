import { MedicalHistoryImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MedicalHistoryPage2 = () => {
  return (
    <CommonPage
      pageTitle={`Medical History`}
      src={MedicalHistoryImage2}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MedicalHistoryPage2;
