"use client";

import { App3ChecklistmanagementuniversityapprenticeshipsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const App3ChecklistmanagementuniversityapprenticeshipsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / APP3_ChecklistManagementUniversityApprenticeships`}
      src={App3ChecklistmanagementuniversityapprenticeshipsImage}
      backRoute="/onboarding-initial-setup"
      // amendmentButtonRoute="/onboarding-initial-setup"
    />
  );
};

export default App3ChecklistmanagementuniversityapprenticeshipsPage;
