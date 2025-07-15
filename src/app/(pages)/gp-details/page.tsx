import { GpDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GpDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`GP Details`}
      src={GpDetailsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default GpDetailsPage;
