"use client";

import { ExampleGroupProgressTrackerAccreditedImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ExampleGroupProgressTrackerAccreditedPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / example-group-progress-tracker-accredited`}
      src={ExampleGroupProgressTrackerAccreditedImage}
      backRoute="/"
      amendmentButtonRoute="/progress-reviews-tracking"
    />
  );
};

export default ExampleGroupProgressTrackerAccreditedPage;
