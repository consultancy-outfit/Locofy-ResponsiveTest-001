import { GpDetailsImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GpDetailsPage1 = () => {
  return (
    <CommonPage
      pageTitle={`GP Details`}
      src={GpDetailsImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default GpDetailsPage1;
