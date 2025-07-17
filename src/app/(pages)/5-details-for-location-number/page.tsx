import { DetailsForLocationNumberImag } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DetailsForLocationNumberPage = () => {
  return (
    <CommonPage
      pageTitle={`Details for Location number`}
      src={DetailsForLocationNumberImag}
      backRoute="/add-location"
    />
  );
};

export default DetailsForLocationNumberPage;
