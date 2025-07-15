import { LocationReadinessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationReadinessPage = () => {
  return (
    <CommonPage
      pageTitle={`6.8 Location readiness`}
      src={LocationReadinessImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default LocationReadinessPage;
