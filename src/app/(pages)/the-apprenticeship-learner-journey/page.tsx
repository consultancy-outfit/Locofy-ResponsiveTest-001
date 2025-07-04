import { TheApprenticeshipLearnerJourneyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheApprenticeshipLearnerJourneyPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship Roles & Forms Guide / THE APPRENTICESHIP LEARNER JOURNEY`}
      src={TheApprenticeshipLearnerJourneyImage}
      backRoute="/apprenticeship-roles-forms-guide"
    />
  );
};

export default TheApprenticeshipLearnerJourneyPage;
