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
    link: "/cheating-plagiarism-policy",
    icon: img1SafeguardingPlagiarismconductImage,
    title: "qa-cheating-_-plagiarism-policy",
  },
  {
    key: "safeguarding-2",
    link: "/apprenticeship-safeguarding-prevent-duty-policy",
    icon: img2SafeguardingPlagiarismconductImage,
    title: "Safeguarding-and-Prevent-Policy-Apprenticeships-V5-September-2024",
  },
  {
    key: "safeguarding-3",
    link: "/safeguarding-concern-incident-report-template",
    icon: img3SafeguardingPlagiarismconductImage,
    title: "Safeguarding-Concern-incident-report-template",
  }
];

const SafeguardingPlagiarismconductPage = () => {
  return (
    <MultiPathPage
      arrayData={SafeguardingPlagiarismconductPageData}
      pageTitle="Safeguarding, Plagiarism & Conduct"
       backRoute="/apprenticeship-documents"
    />
  );
};

export default SafeguardingPlagiarismconductPage;
