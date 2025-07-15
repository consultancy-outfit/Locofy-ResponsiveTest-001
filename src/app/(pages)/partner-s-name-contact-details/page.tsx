import { PartnerSNameContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartnerSNameContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Partner’s Name & Contact Details`}
      src={PartnerSNameContactDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default PartnerSNameContactDetailsPage;
