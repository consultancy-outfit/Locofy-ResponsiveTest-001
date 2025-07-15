import { TemporaryContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TemporaryContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={` Temporary Contact Details`}
      src={TemporaryContactDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default TemporaryContactDetailsPage;
