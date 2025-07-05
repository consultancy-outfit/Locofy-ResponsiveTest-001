"use client";

import { LessonObservationSampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const LessonObservationSamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents /  lesson-observation-sample`}
      src={LessonObservationSampleImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="/lesson-observation-sample"
    />
  );
};

export default LessonObservationSamplePage;
