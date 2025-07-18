import { MedicalHistoryImage3 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MedicalHistoryPage3 = () => {
  return (
    <CommonPage
      pageTitle={`Medical History`}
      src={MedicalHistoryImage3}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default MedicalHistoryPage3;
