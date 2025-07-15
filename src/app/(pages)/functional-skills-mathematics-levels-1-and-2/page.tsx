import { FunctionalSkillsMathematicsLevels1And2Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const FunctionalSkillsMathematicsLevels1And2Page = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Appendix 1: subject content (published by the Department for Education)`}
      src={FunctionalSkillsMathematicsLevels1And2Image}
      backRoute="/subject-content-functional-skills-english"
    />
  );
};

export default FunctionalSkillsMathematicsLevels1And2Page;
