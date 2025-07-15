import { 65FoodSafetyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const 65FoodSafetyPage = () => {
  return (
    <CommonPage
      pageTitle={`6.5  Food safety`}
      src={65FoodSafetyImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default 65FoodSafetyPage;
