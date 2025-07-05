"use client";

import { ExampleGroupProgressTrackerAccreditedImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ExampleGroupProgressTrackerAccreditedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Journey / example-group-progress-tracker-accredited`}
      src={ExampleGroupProgressTrackerAccreditedImage}
      backRoute="/progress-reviews-tracking"
      // amendmentButtonRoute="/example-group-progress-tracker-accredited"
    />
  );
};

export default ExampleGroupProgressTrackerAccreditedPage;
