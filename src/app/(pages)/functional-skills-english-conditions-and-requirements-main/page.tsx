"use client";
import { MultiPathPage } from "@/components";
import {
  img1FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img2FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img3FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img4FunctionalSkillsEnglishConditionsAndRequirementsMainImage
} from "@/assets";
import React from "react";

const FunctionalSkillsEnglishConditionsAndRequirementsMainPageData = [
  {
    key: "functional-1",
    link: "/functional-skills-english-conditions-and-requirements-2024-introduction",
    icon: img1FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Introduction",
  },
  {
    key: "functional-2",
    link: "/functional-skills-english-conditions-and-requirements-2024-subject-level-conditions",
    icon: img2FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Subject Level Conditions",
  },
  {
    key: "functional-3",
    link: "/requirements-for-functional-skills-qualifications-in-english",
    icon: img3FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Requirements for Functional Skills  qualifications in English",
  },
  {
    key: "functional-4",
    link: "subject-content-functional-skills-english-main",
    icon: img4FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Appendix 1: subject content (published by the  Department for Education)",
  }
];

const FunctionalSkillsEnglishConditionsAndRequirementsMainPage = () => {
  return (
    <MultiPathPage
      arrayData={FunctionalSkillsEnglishConditionsAndRequirementsMainPageData}
      pageTitle=" Functional Skills English Conditions and Requirements "
      backRoute="/functional-skills-support"
    />
  );
};

export default FunctionalSkillsEnglishConditionsAndRequirementsMainPage;
