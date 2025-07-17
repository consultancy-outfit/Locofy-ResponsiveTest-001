import { AllRegulatedActivitiesYouProposeToCarryOnAtThisLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AllRegulatedActivitiesYouProposeToCarryOnAtThisLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`6.3 All regulated activities you propose to carry on at this location`}
      src={AllRegulatedActivitiesYouProposeToCarryOnAtThisLocationImage}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default AllRegulatedActivitiesYouProposeToCarryOnAtThisLocationPage;
