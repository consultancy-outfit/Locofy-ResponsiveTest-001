import { QualificationsExperienceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QualificationsExperiencePage = () => {
  return (
    <CommonPage
      pageTitle={`Qualifications & Experience`}
      src={QualificationsExperienceImage}
      backRoute="/add-a-partner"
    />
  );
};

export default QualificationsExperiencePage;
