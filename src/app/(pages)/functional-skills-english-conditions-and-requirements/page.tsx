"use client";
import { MultiPathPage } from "@/components";
import {
  img1FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img2FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img3FunctionalSkillsEnglishConditionsAndRequirementsImage,
  img4FunctionalSkillsEnglishConditionsAndRequirementsImage
} from "@/assets";
import React from "react";

const FunctionalSkillsEnglishConditionsAndRequirementsPageData = [
  {
    key: "functional-1",
    link: "/introduction-functional-skills-mathematics-conditions-and-requirements",
    icon: img1FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Introduction",
  },
  {
    key: "functional-2",
    link: "/subject-level-conditions-functional-skills-mathematics-conditions-and-requirements",
    icon: img2FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Subject Level Conditions",
  },
  {
    key: "functional-3",
    link: "/functionalskils-math",
    icon: img3FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Requirements for Functional Skills  qualifications in Mathematics",
  },
  {
    key: "functional-4",
    link: "/functional-skills-math",
    icon: img4FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Appendix 1: subject content (published by the  Department for Education)",
  }
];

const FunctionalSkillsEnglishConditionsAndRequirementsPage = () => {
  return (
    <MultiPathPage
      arrayData={FunctionalSkillsEnglishConditionsAndRequirementsPageData}
      pageTitle="Functional Skills English Conditions and Requirements"
      backRoute="/functional-skills-support"
    />
  );
};

export default FunctionalSkillsEnglishConditionsAndRequirementsPage;
