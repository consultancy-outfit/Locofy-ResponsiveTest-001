"use client";

import { ApprenticeshipWorkplaceAssignmentsExamplesImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeshipWorkplaceAssignmentsExamplesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Apprenticeship Workplace Assignments Examples`}
      src={ApprenticeshipWorkplaceAssignmentsExamplesImage}
      backRoute="/"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default ApprenticeshipWorkplaceAssignmentsExamplesPage;
