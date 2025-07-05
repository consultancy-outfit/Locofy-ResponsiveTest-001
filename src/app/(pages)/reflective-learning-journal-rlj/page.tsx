"use client";

import { ReflectiveLearningJournalRljImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ReflectiveLearningJournalRljPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Reflective Learning Journal (RLJ)`}
      src={ReflectiveLearningJournalRljImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default ReflectiveLearningJournalRljPage;
