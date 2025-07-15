import { Section5TheRegulatedActivityActivitiesYouWantToProvideToBeCompletedByAllApplicantsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section5TheRegulatedActivityActivitiesYouWantToProvideToBeCompletedByAllApplicantsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 5: The regulated activity/activities you want to provide (To be completed by all applicants)`}
      src={Section5TheRegulatedActivityActivitiesYouWantToProvideToBeCompletedByAllApplicantsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default Section5TheRegulatedActivityActivitiesYouWantToProvideToBeCompletedByAllApplicantsPage;
