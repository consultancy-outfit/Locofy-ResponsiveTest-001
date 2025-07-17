import { JobShareInformation } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Job Share Information`}
      src={JobShareInformation}
      backRoute="/additional-location-form-for-new-provider-registration-applications"
    />
  );
};

export default ApplicationDetailsPage;
