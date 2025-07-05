"use client";
import { MultiPathPage } from "@/components";
import {
  img1FunctionalSkillsSupportImage,
  img2FunctionalSkillsSupportImage,
  img3FunctionalSkillsSupportImage
} from "@/assets";
import React from "react";

const FunctionalSkillsSupportPageData = [
  {
    key: "functional-1",
    link: "/functional-skills-english-conditions-and-requirements",
    icon: img1FunctionalSkillsSupportImage,
    title: "functional-skills-english-conditions-and-requirements-main",
  },
  {
    key: "functional-2",
    link: "/functional-skills-english-conditions-and-requirements",
    icon: img2FunctionalSkillsSupportImage,
    title: "Functional_Skills_Mathematics_Conditions_and_Requirements_2024",
  },
  {
    key: "functional-3",
    link: "/functional-skills-criteria-for-ict",
    icon: img3FunctionalSkillsSupportImage,
    title: "Functional-skills-criteria-for-ict",
  }
];

const FunctionalSkillsSupportPage = () => {
  return (
    <MultiPathPage
      arrayData={FunctionalSkillsSupportPageData}
      pageTitle="Functional Skills Support"
      backRoute="/apprenticeship-documents"
    />
  );
};

export default FunctionalSkillsSupportPage;
