import { TheRegulatedActivitiesYouProposeToCarryOnAtThisLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheRegulatedActivitiesYouProposeToCarryOnAtThisLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`6.9 The regulated activities you propose to carry on at this location`}
      src={TheRegulatedActivitiesYouProposeToCarryOnAtThisLocationImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default TheRegulatedActivitiesYouProposeToCarryOnAtThisLocationPage;
