"use client";

import { ConsentAndTreatmentSafeguardsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ConsentAndTreatmentSafeguardsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Consent and Treatment Safeguards    `}
      src={ConsentAndTreatmentSafeguardsImage}
      backRoute="/part-iv-consent-to-treatment"
      amendmentButtonRoute="/chap-1-amendment-comparison"
    />
  );
};

export default ConsentAndTreatmentSafeguardsPage;
