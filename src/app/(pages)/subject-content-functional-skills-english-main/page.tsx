"use client";
import { MultiPathPage } from "@/components";
import {
  img1SubjectContentFunctionalSkillsEnglishMainImage,
  img2SubjectContentFunctionalSkillsEnglishMainImage,
  img3SubjectContentFunctionalSkillsEnglishMainImage,
  img4SubjectContentFunctionalSkillsEnglishMainImage
} from "@/assets";
import React from "react";

const SubjectContentFunctionalSkillsEnglishMainPageData = [
  {
    key: "subject-1",
    link: "/subject-content-fs-english-introduction-purpose",
    icon: img1SubjectContentFunctionalSkillsEnglishMainImage,
    title: "Introduction & Purpose",
  },
  {
    key: "subject-2",
    link: "/fs-english-entry-levels-1-to-3",
    icon: img2SubjectContentFunctionalSkillsEnglishMainImage,
    title: "Functional Skills English – Entry Levels 1 to 3",
  },
  {
    key: "subject-3",
    link: "/functional-skills-english-levels-1-2",
    icon: img3SubjectContentFunctionalSkillsEnglishMainImage,
    title: "Functional Skills English – Level 1 and Level 2",
  },
  {
    key: "subject-4",
    link: "/appendix",
    icon: img4SubjectContentFunctionalSkillsEnglishMainImage,
    title: "Appendix",
  }
];

const SubjectContentFunctionalSkillsEnglishMainPage = () => {
  return (
    <MultiPathPage
      arrayData={SubjectContentFunctionalSkillsEnglishMainPageData}
      pageTitle="Subject content functional skills: English"
      backRoute="/functional-skills-support"
    />
  );
};

export default SubjectContentFunctionalSkillsEnglishMainPage;
