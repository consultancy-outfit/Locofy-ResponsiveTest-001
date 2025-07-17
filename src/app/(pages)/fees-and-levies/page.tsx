import { FeesAndLeviesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FeesAndLeviesPage = () => {
  return (
    <CommonPage
      pageTitle="Fees and levies"
      src={FeesAndLeviesImage}
      backRoute="/pisp_spi"
    />
  );
};

export default FeesAndLeviesPage;
