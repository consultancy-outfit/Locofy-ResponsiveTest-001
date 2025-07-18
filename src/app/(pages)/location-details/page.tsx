import { LocationDetailsImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Location Details`}
      src={LocationDetailsImage1}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default LocationDetailsPage;
