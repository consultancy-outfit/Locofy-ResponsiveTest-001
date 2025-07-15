import { GpDetailsImage2 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GpDetailsPage2 = () => {
  return (
    <CommonPage
      pageTitle={`GP Details`}
      src={GpDetailsImage2}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default GpDetailsPage2;
