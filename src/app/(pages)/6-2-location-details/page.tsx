import { LocationDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`6.2 Location details`}
      src={LocationDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default LocationDetailsPage;
