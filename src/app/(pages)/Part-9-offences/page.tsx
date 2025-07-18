"use client";

import { Part9OffencesImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const Part9POffencesPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Part IX / Offences`}
      src={Part9OffencesImage}
      backRoute="/mental-health-act-1983"
      amendmentButtonRoute="/part-9-offences-ac"
    />
  );
};

export default Part9POffencesPage;
