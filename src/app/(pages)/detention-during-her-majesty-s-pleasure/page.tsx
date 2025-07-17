"use client";

import { DetentionDuringHerMajestySPleasureImage1 } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const DetentionDuringHerMajestySPleasurePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Detention during Her Majesty’s pleasure`}
      src={DetentionDuringHerMajestySPleasureImage1}
      backRoute="/mental-health-act-1983-part-iii"
      amendmentButtonRoute="/chap-5-amendment-comparison"
    />
  );
};

export default DetentionDuringHerMajestySPleasurePage;
