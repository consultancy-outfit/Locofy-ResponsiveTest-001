import { applicationdetials, ThePartnershipSNameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Application Details`}
      src={applicationdetials}
      backRoute="/remove-a-location"
    />
  );
};

export default ApplicationDetailsPage;
