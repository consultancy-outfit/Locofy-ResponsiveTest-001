import { ApprenticeshipJourneyDiagramsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApprenticeshipJourneyDiagramsPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Documents / Apprenticeship Journey Diagrams`}
      src={ApprenticeshipJourneyDiagramsImage}
      backRoute="/"
    />
  );
};

export default ApprenticeshipJourneyDiagramsPage;
