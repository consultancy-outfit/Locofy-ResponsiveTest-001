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
    link: "/functional-skills-english-conditions-and-requirements-2024-introduction",
    icon: img1FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Introduction",
  },
  {
    key: "functional-2",
    link: "/functional-skills-english-conditions-and-requirements-2024-subject-level-conditions",
    icon: img2FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Subject Level Conditions",
  },
  {
    key: "functional-3",
    link: "/requirements-for-functional-skills-qualifications-in-english",
    icon: img3FunctionalSkillsEnglishConditionsAndRequirementsImage,
    title: "Requirements for Functional Skills  qualifications in Mathematics",
  },
  {
    key: "functional-4",
    link: "/appendix",
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
