import { ApprenticeshipJourneyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApprenticeshipJourneyPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Documents / Apprenticeship Journey`}
      src={ApprenticeshipJourneyImage}
      backRoute="/"
    />
  );
};

export default ApprenticeshipJourneyPage;
