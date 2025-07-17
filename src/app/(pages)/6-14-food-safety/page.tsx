import { FoodSafetyImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FoodSafetyPage = () => {
  return (
    <CommonPage
      pageTitle={`Food safety`}
      src={FoodSafetyImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default FoodSafetyPage;
