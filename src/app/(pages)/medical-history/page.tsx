import { MedicalHistoryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MedicalHistoryPage = () => {
  return (
    <CommonPage
      pageTitle={`Medical History`}
      src={MedicalHistoryImage}
      backRoute="/add-a-partner"
    />
  );
};

export default MedicalHistoryPage;
