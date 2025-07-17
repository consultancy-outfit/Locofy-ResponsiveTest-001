import { Section8ChecklistOfInformationThatMustBeAvailableToCqcOnRequestToBeCompletedByAllApplicantsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section8ChecklistOfInformationThatMustBeAvailableToCqcOnRequestToBeCompletedByAllApplicantsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 8: Checklist of information that must be available to CQC on request (To be completed by all applicants)`}
      src={Section8ChecklistOfInformationThatMustBeAvailableToCqcOnRequestToBeCompletedByAllApplicantsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default Section8ChecklistOfInformationThatMustBeAvailableToCqcOnRequestToBeCompletedByAllApplicantsPage;
