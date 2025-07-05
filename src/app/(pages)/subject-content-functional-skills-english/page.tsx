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
    link: "/requirements-for-functional-skills-two",
    icon: img2SubjectContentFunctionalSkillsEnglishImage,
    title: "Functional Skills Mathematics – Entry Levels 1 to 3",
  },
  {
    key: "subject-3",
    link: "/functional-skills-english-levels-1-2",
    icon: img3SubjectContentFunctionalSkillsEnglishImage,
    title: "Functional Skills Mathematics – Level 1 and Level 2",
  }
];

const SubjectContentFunctionalSkillsEnglishPage = () => {
  return (
    <MultiPathPage
      arrayData={SubjectContentFunctionalSkillsEnglishPageData}
      pageTitle="Subject content functional skills: English"
      backRoute="/functional-skills-support"
    />
  );
};

export default SubjectContentFunctionalSkillsEnglishPage;
