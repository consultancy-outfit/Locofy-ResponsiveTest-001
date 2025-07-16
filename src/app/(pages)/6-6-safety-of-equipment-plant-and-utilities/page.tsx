import { SafetyOfEquipmentPlantAndUtilitiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SafetyOfEquipmentPlantAndUtilitiesPage = () => {
  return (
    <CommonPage
      pageTitle={`6.6  Safety of equipment, plant and utilities `}
      src={SafetyOfEquipmentPlantAndUtilitiesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default SafetyOfEquipmentPlantAndUtilitiesPage;
