import { Section2RegulatedActivitiesAndLocationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section2RegulatedActivitiesAndLocationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 2: Regulated Activities and locations`}
      src={Section2RegulatedActivitiesAndLocationsImage}
      backRoute="/application-to-continue-registration-as-a-manager-under-a-new-provide"
    />
  );
};

export default Section2RegulatedActivitiesAndLocationsPage;
