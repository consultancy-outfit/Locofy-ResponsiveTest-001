import { DayToDayManagementOfRegulatedActivitiesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DayToDayManagementOfRegulatedActivitiesPage = () => {
  return (
    <CommonPage
      pageTitle={`Day-to-day management of regulated activities`}
      src={DayToDayManagementOfRegulatedActivitiesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DayToDayManagementOfRegulatedActivitiesPage;
