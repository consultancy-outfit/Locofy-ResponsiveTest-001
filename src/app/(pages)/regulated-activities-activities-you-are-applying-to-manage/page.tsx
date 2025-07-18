import { RegulatedActivitiesActivitiesyouareapplyingtomanage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Regulated Activities (Activities you are applying to manage)`}
      src={RegulatedActivitiesActivitiesyouareapplyingtomanage}
      backRoute="/additional-location-form-for-new-provider-registration-applications"
    />
  );
};

export default ApplicationDetailsPage;
