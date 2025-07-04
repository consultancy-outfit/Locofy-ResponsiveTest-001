"use client";
import { MultiPathPage } from "@/components";
import {
  img1SafeguardingPlagiarismconductImage,
  img2SafeguardingPlagiarismconductImage,
  img3SafeguardingPlagiarismconductImage
} from "@/assets";
import React from "react";

const SafeguardingPlagiarismconductPageData = [
  {
    key: "safeguarding-1",
    link: "/",
    icon: img1SafeguardingPlagiarismconductImage,
    title: "Safeguarding, Plagiarism & Conduct Item 1",
  },
  {
    key: "safeguarding-2",
    link: "/",
    icon: img2SafeguardingPlagiarismconductImage,
    title: "Safeguarding, Plagiarism & Conduct Item 2",
  },
  {
    key: "safeguarding-3",
    link: "/",
    icon: img3SafeguardingPlagiarismconductImage,
    title: "Safeguarding, Plagiarism & Conduct Item 3",
  }
];

const SafeguardingPlagiarismconductPage = () => {
  return (
    <MultiPathPage
      arrayData={SafeguardingPlagiarismconductPageData}
      pageTitle="Safeguarding, Plagiarism & Conduct"
      backRoute="/court-hearing"
    />
  );
};

export default SafeguardingPlagiarismconductPage;
