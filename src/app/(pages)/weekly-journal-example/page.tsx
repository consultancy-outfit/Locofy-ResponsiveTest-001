"use client";

import { WeeklyJournalExampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WeeklyJournalExamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents /  Weekly journal example`}
      src={WeeklyJournalExampleImage}
      backRoute="/training-delivery-off-the-job-learning"
      // amendmentButtonRoute="/weekly-journal-example"
    />
  );
};

export default WeeklyJournalExamplePage;
