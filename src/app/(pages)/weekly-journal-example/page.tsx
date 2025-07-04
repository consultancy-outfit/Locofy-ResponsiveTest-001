"use client";

import { WeeklyJournalExampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WeeklyJournalExamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Weekly journal example`}
      src={WeeklyJournalExampleImage}
      backRoute="/"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default WeeklyJournalExamplePage;
