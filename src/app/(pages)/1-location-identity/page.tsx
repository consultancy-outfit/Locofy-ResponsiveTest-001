import { LocationIdentityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LocationIdentityPage = () => {
  return (
    <CommonPage
      pageTitle={`Location Identity`}
      src={LocationIdentityImage}
      backRoute="/additional-location-form-for-new-provider-registration-applications-2"
    />
  );
};

export default LocationIdentityPage;
