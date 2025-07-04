"use client";

import { SchemeOfWorkMortgageAdviserLevel3Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const SchemeOfWorkMortgageAdviserLevel3Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Scheme of work Mortgage Adviser Level 3`}
      src={SchemeOfWorkMortgageAdviserLevel3Image}
      backRoute="/"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default SchemeOfWorkMortgageAdviserLevel3Page;
