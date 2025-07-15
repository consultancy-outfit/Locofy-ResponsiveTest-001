import { DisclosureAndBarringServiceCriminalRecordsDisclosureImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisclosureAndBarringServiceCriminalRecordsDisclosurePage = () => {
  return (
    <CommonPage
      pageTitle={`Disclosure and Barring Service criminal records disclosure `}
      src={DisclosureAndBarringServiceCriminalRecordsDisclosureImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DisclosureAndBarringServiceCriminalRecordsDisclosurePage;
