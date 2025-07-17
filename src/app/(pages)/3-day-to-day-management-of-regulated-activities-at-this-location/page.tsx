import { DayToDayManagementOfRegulatedActivitiesAtThisLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DayToDayManagementOfRegulatedActivitiesAtThisLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`Day-to-day management of regulated activities at this location`}
      src={DayToDayManagementOfRegulatedActivitiesAtThisLocationImage}
      backRoute="/add-location"
    />
  );
};

export default DayToDayManagementOfRegulatedActivitiesAtThisLocationPage;
