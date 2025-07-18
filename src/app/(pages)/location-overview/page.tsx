import { LocationOverview } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Location Overview`}
      src={LocationOverview}
      backRoute="/additional-location-form-for-new-provider-registration-applications"
    />
  );
};

export default ApplicationDetailsPage;
