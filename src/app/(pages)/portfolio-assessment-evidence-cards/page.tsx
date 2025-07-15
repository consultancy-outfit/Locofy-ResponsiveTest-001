"use client";
import { MultiPathPage } from "@/components";
import {
  img1PortfolioassessmentEvidenceImage,
  img2PortfolioassessmentEvidenceImage,
  img3PortfolioassessmentEvidenceImage,
  img4PortfolioassessmentEvidenceImage,
} from "@/assets";
import React from "react";

const ProgressReviewstrackingPageData = [
  {
    key: "progress-1",
    link: "/assessment-plan-example",
    icon: img1PortfolioassessmentEvidenceImage,
    title: "Assessment Plan Example",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-2",
    link: "/guidance-document-for-level-2-3-Guidance-document",
    icon: img2PortfolioassessmentEvidenceImage,
    title: "Guidance-document-for-witness-testimony-pdf",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-3",
    link: "/portfolio-of-evidence-mapping-and-tracking-form-tquk",
    icon: img3PortfolioassessmentEvidenceImage,
    title: "Portfolio-of-Evidence-Mapping-and-Tracking-Form-TQUK",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-4",
    link: "/tpta-portfolio-of-evidence-template",
    icon: img4PortfolioassessmentEvidenceImage,
    title: "Tpta-portfolio-of-evidence-template",
    size: { xs: 12 },
  },
];

const PortfolioassessmentEvidenceCardsPage = () => {
  return (
    <MultiPathPage
      arrayData={ProgressReviewstrackingPageData}
      pageTitle="Portfolio & Assessment Evidence"
      backRoute="/apprenticeship-documents"
    />
  );
};

export default PortfolioassessmentEvidenceCardsPage;
