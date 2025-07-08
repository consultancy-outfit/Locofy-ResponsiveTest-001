"use client";

import { LessonObservationSampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const LessonObservationSamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /  lesson-observation-sample`}
      src={LessonObservationSampleImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/muneeb_asif_consultancyoutfit_co_uk/EfFOvZ8EtxRKsWFcigGmeF4B-Cf29c8ZooUiLmkrqNSpsA?e=yJ4qua"
    />
  );
};

export default LessonObservationSamplePage;
