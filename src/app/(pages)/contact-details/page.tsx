import { ContactDetails } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={` Contact Details`}
      src={ContactDetails}
      backRoute="/additional-location-form-for-new-provider-registration-applications"
    />
  );
};

export default ApplicationDetailsPage;
