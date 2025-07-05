"use client";

import { ApprenticeshipWorkplaceAssignmentsExamplesImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ApprenticeshipWorkplaceAssignmentsExamplesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents / Apprenticeship Workplace Assignments Examples`}
      src={ApprenticeshipWorkplaceAssignmentsExamplesImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default ApprenticeshipWorkplaceAssignmentsExamplesPage;
