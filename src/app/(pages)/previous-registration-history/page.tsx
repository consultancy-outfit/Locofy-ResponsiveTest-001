import { PreviousRegistrationHistoryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PreviousRegistrationHistoryPage = () => {
  return (
    <CommonPage
      pageTitle={`Previous Registration History`}
      src={PreviousRegistrationHistoryImage}
      backRoute="/add-a-partner"
    />
  );
};

export default PreviousRegistrationHistoryPage;
