"use client";

import { App3ChecklistmanagementuniversityapprenticeshipsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const App3ChecklistmanagementuniversityapprenticeshipsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Document / APP3_Checklist Management University Apprenticeships`}
      src={App3ChecklistmanagementuniversityapprenticeshipsImage}
      backRoute="/onboarding-initial-setup"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/saqib_hussain_consultancyoutfit_co_uk/Ebh5FgoxB8dPnypjorYIOscBR_LLypDC1uA0TDjqe6eEsA?e=MvZXuB"
    />
  );
};

export default App3ChecklistmanagementuniversityapprenticeshipsPage;
