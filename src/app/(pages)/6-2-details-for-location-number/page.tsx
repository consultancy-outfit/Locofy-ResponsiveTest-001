import { DetailsForLocationNumberImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DetailsForLocationNumberPage = () => {
  return (
    <CommonPage
      pageTitle={`Details for Location number`}
      src={DetailsForLocationNumberImage}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default DetailsForLocationNumberPage;
