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
    link: "/",
    icon: img1FunctionalSkillsSupportImage,
    title: "Functional Skills Support Item 1",
  },
  {
    key: "functional-2",
    link: "/",
    icon: img2FunctionalSkillsSupportImage,
    title: "Functional Skills Support Item 2",
  },
  {
    key: "functional-3",
    link: "/",
    icon: img3FunctionalSkillsSupportImage,
    title: "Functional Skills Support Item 3",
  }
];

const FunctionalSkillsSupportPage = () => {
  return (
    <MultiPathPage
      arrayData={FunctionalSkillsSupportPageData}
      pageTitle="Functional Skills Support"
      backRoute="/court-hearing"
    />
  );
};

export default FunctionalSkillsSupportPage;
