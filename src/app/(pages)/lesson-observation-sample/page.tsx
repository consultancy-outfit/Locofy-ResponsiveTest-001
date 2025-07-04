"use client";

import { LessonObservationSampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const LessonObservationSamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / lesson-observation-sample`}
      src={LessonObservationSampleImage}
      backRoute="/"
      amendmentButtonRoute="/training-delivery-off-the-job-learning"
    />
  );
};

export default LessonObservationSamplePage;
