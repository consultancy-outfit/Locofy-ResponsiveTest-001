"use client";
import { MultiPathPage } from "@/components";
import {
  img1FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img2FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img3FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
  img4FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
} from "@/assets";
import React from "react";

const FunctionalSkillsEnglishConditionsAndRequirementsMainPageData = [
  {
    key: "functional-1",
    link: "/functional-skills-english-conditions-and-requirements-2024-introduction",
    icon: img1FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Introduction",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "functional-2",
    link: "/functional-skills-english-conditions-and-requirements-2024-subject-level-conditions",
    icon: img2FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Subject Level Conditions",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "functional-3",
    link: "/requirements-for-functional-skills-qualifications-in-english",
    icon: img3FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title: "Requirements for Functional Skills  qualifications in English",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "functional-4",
    link: "subject-content-functional-skills-english-main",
    icon: img4FunctionalSkillsEnglishConditionsAndRequirementsMainImage,
    title:
      "Appendix 1: subject content (published by the  Department for Education)",
    size: { xs: 12 },
  },
];

const FunctionalSkillsEnglishConditionsAndRequirementsMainPage = () => {
  return (
    <MultiPathPage
      arrayData={FunctionalSkillsEnglishConditionsAndRequirementsMainPageData}
      pageTitle=" Functional Skills English Conditions and Requirements "
      backRoute="/functional-skills-support"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/shanulhaq_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FFunctional%5FSkills%5FEnglish%5FConditions%5Fand%5FRequirements%5F2024%2Epdf&parent=%2Fpersonal%2Fshanulhaq%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default FunctionalSkillsEnglishConditionsAndRequirementsMainPage;
