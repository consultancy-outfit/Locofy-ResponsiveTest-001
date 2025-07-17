import { LocationOverviewImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationOverviewPage = () => {
  return (
    <CommonPage
      pageTitle={`Acute services (ACS)`}
      src={LocationOverviewImage}
      backRoute="/add-location"
    />
  );
};

export default LocationOverviewPage;
