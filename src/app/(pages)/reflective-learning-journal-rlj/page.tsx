"use client";

import { ReflectiveLearningJournalRljImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ReflectiveLearningJournalRljPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents /  Reflective Learning Journal (RLJ)`}
      src={ReflectiveLearningJournalRljImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="/reflective-learning-journal-rlj"
    />
  );
};

export default ReflectiveLearningJournalRljPage;
