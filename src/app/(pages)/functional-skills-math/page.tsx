"use client";
import { MultiPathPage } from "@/components";
import {
  img1SubjectContentFunctionalSkillsEnglishImage,
  img2SubjectContentFunctionalSkillsEnglishImage,
  img3SubjectContentFunctionalSkillsEnglishImage
} from "@/assets";
import React from "react";

const SubjectContentFunctionalSkillsEnglishPageData = [
  {
    key: "subject-1",
    link: "/subject-content-functional-skills-mathematic",
    icon: img1SubjectContentFunctionalSkillsEnglishImage,
    title: "Intro & Purpose",
  },
  {
    key: "subject-2",
    link: "/requirements-for-functional-skills-three",
    icon: img2SubjectContentFunctionalSkillsEnglishImage,
    title: "Functional Skills Mathematics – Entry Levels 1 to 3",
  },
  {
    key: "subject-3",
    link: "/functional-skills-mathematics-levels-1-and-2",
    icon: img3SubjectContentFunctionalSkillsEnglishImage,
    title: "Functional Skills Mathematics – Level 1 and Level 2",
  }
];

const SubjectContentFunctionalSkillsEnglishPage = () => {
  return (
    <MultiPathPage
      arrayData={SubjectContentFunctionalSkillsEnglishPageData}
      pageTitle="Subject content functional skills: Mathematic"
      backRoute="/functional-skills-english-conditions-and-requirements"
    />
  );
};

export default SubjectContentFunctionalSkillsEnglishPage;
