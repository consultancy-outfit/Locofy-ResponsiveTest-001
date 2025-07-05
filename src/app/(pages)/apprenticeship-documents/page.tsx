"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipDocumentsImage,
  img2ApprenticeshipDocumentsImage,
  img3ApprenticeshipDocumentsImage,
  img4ApprenticeshipDocumentsImage,
  img5ApprenticeshipDocumentsImage,
  img6ApprenticeshipDocumentsImage,
  img7ApprenticeshipDocumentsImage,
  img8ApprenticeshipDocumentsImage
} from "@/assets";
import React from "react";

const ApprenticeshipDocumentsPageData = [
  {
    key: "apprenticeship-1",
    link: "/onboarding-initial-setup",
    icon: img1ApprenticeshipDocumentsImage,
    title: "Onboarding & Initial Setup",
  },
  {
    key: "apprenticeship-2",
    link: "/training-delivery-off-the-job-learning",
    icon: img2ApprenticeshipDocumentsImage,
    title: "Training Delivery & Off-the-Job Learning",
  },
  {
    key: "apprenticeship-3",
    link: "/",
    icon: img3ApprenticeshipDocumentsImage,
    title: "Functional Skills Support",
  },
  {
    key: "apprenticeship-4",
    link: "/functional-skills-support",
    icon: img4ApprenticeshipDocumentsImage,
    title: "Progress Reviews & Tracking",
  },
  {
    key: "apprenticeship-5",
    link: "/portfolio-assessment-evidence",
    icon: img5ApprenticeshipDocumentsImage,
    title: "Portfolio & Assessment Evidence",
  },
  {
    key: "apprenticeship-6",
    link: "/gateway-completion-evaluation",
    icon: img6ApprenticeshipDocumentsImage,
    title: "Gateway, Completion & Evaluation",
  },
  {
    key: "apprenticeship-7",
    link: "/safeguarding-plagiarism-conduct",
    icon: img7ApprenticeshipDocumentsImage,
    title: "Safeguarding, Plagiarism & Conduct",
  },
  {
    key: "apprenticeship-8",
    link: "/data-attendance-tracking-systems",
    icon: img8ApprenticeshipDocumentsImage,
    title: "Data, Attendance & Tracking Systems",
  }
];

const ApprenticeshipDocumentsPage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipDocumentsPageData}
      pageTitle="Apprenticeship Documents"
       backRoute="/apprenticeship-documents"
    />
  );
};

export default ApprenticeshipDocumentsPage;
