"use client";
import { MultiPathPage } from "@/components";
import {
  img1PortfolioassessmentEvidenceImage,
  img2PortfolioassessmentEvidenceImage,
  img3PortfolioassessmentEvidenceImage
} from "@/assets";
import React from "react";

const PortfolioassessmentEvidencePageData = [
  {
    key: "portfolio-1",
    link: "/",
    icon: img1PortfolioassessmentEvidenceImage,
    title: "Portfolio & Assessment Evidence Item 1",
  },
  {
    key: "portfolio-2",
    link: "/",
    icon: img2PortfolioassessmentEvidenceImage,
    title: "Portfolio & Assessment Evidence Item 2",
  },
  {
    key: "portfolio-3",
    link: "/",
    icon: img3PortfolioassessmentEvidenceImage,
    title: "Portfolio & Assessment Evidence Item 3",
  }
];

const PortfolioassessmentEvidencePage = () => {
  return (
    <MultiPathPage
      arrayData={PortfolioassessmentEvidencePageData}
      pageTitle="Portfolio & Assessment Evidence"
      backRoute="/court-hearing"
    />
  );
};

export default PortfolioassessmentEvidencePage;
