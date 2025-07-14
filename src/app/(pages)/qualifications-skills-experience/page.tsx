import { QualificationsSkillsExperienceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const QualificationsSkillsExperiencePage = () => {
  return (
    <CommonPage
      pageTitle={`Qualifications, Skills & Experience`}
      src={QualificationsSkillsExperienceImage}
      backRoute="/who-needs-to-register"
    />
  );
};

export default QualificationsSkillsExperiencePage;
