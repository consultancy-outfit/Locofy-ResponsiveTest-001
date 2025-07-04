import { ApprenticeshipjourneyImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApprenticeshipjourneyPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / apprenticeshipjourney`}
      src={ApprenticeshipjourneyImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default ApprenticeshipjourneyPage;
