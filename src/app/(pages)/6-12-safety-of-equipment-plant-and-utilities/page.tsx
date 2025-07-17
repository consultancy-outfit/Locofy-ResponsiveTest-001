import { SafetyOfEquipmentPlantAndUtilitiesImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SafetyOfEquipmentPlantAndUtilitiesPage = () => {
  return (
    <CommonPage
      pageTitle={`6.12 Safety of equipment, plant and utilities`}
      src={SafetyOfEquipmentPlantAndUtilitiesImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default SafetyOfEquipmentPlantAndUtilitiesPage;
