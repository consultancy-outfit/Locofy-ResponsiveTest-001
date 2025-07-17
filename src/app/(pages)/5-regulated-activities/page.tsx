import { RegulatedActivitiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RegulatedActivitiesPage = () => {
  return (
    <CommonPage
      pageTitle={`Regulated Activities`}
      src={RegulatedActivitiesImage}
      backRoute="/additional-location-form-for-new-provider-registration-applications-2"
    />
  );
};

export default RegulatedActivitiesPage;
