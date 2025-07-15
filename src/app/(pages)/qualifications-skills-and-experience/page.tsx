import { QualificationsSkillsAndExperienceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QualificationsSkillsAndExperiencePage = () => {
  return (
    <CommonPage
      pageTitle={`Qualifications, skills and experience`}
      src={QualificationsSkillsAndExperienceImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default QualificationsSkillsAndExperiencePage;
