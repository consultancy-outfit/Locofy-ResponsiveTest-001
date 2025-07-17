import { ThePartnershipSNameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ThePartnershipSNameAndContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`The partnership’s name and contact details`}
      src={ThePartnershipSNameAndContactDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default ThePartnershipSNameAndContactDetailsPage;
