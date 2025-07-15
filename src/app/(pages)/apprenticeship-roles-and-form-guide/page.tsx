"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipRolesAndFormGuideImage,
  img2ApprenticeshipRolesAndFormGuideImage,
  img3ApprenticeshipRolesAndFormGuideImage,
  img4ApprenticeshipRolesAndFormGuideImage,
  img5ApprenticeshipRolesAndFormGuideImage,
  img6ApprenticeshipRolesAndFormGuideImage,
  img7ApprenticeshipRolesAndFormGuideImage,
  img8ApprenticeshipRolesAndFormGuideImage
} from "@/assets";
import React from "react";

const ApprenticeshipRolesAndFormGuidePageData = [
  {
    key: "apprenticeship-1",
    link: "/understanding-the-roles-in-apprenticeship-delivery",
    icon: img1ApprenticeshipRolesAndFormGuideImage,
    title: "Understanding The Roles In Apprenticeship Delivery",
  },
  {
    key: "apprenticeship-2",
    link: "/template-new-ilp-duplicate-docx-new",
    icon: img2ApprenticeshipRolesAndFormGuideImage,
    title: "1. Template New ILP Duplicate.Docx New",
  },
  {
    key: "apprenticeship-3",
    link: "/application-form",
    icon: img3ApprenticeshipRolesAndFormGuideImage,
    title: "Application Form",
  },
  {
    key: "apprenticeship-4",
    link: "/photo-consent-use-of-digital-video-images",
    icon: img4ApprenticeshipRolesAndFormGuideImage,
    title: "Photo Consent",
  },
  {
    key: "apprenticeship-5",
    link: "/wtd-non-levy-agreement-v1",
    icon: img5ApprenticeshipRolesAndFormGuideImage,
    title: "WTD Levy/Non-Levy Agreement V1",
  },
  {
    key: "apprenticeship-6",
    link: "/enrolment-process",
    icon: img6ApprenticeshipRolesAndFormGuideImage,
    title: "Enrolment Process",
  },
  {
    key: "apprenticeship-7",
    link: "/the-apprenticeship-learner-journey",
    icon: img7ApprenticeshipRolesAndFormGuideImage,
    title: "Learner Journey",
  },
  {
    key: "apprenticeship-8",
    link: "/wtd-how-to-guide-on-learner-cohort-management",
    icon: img8ApprenticeshipRolesAndFormGuideImage,
    title: "WTD How To Guide On Learner Cohort Management",
  }
];

const ApprenticeshipRolesAndFormGuidePage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipRolesAndFormGuidePageData}
      pageTitle="Apprenticeship Roles & Form Guide"
      backRoute="/apprenticeship"
    />
  );
};

export default ApprenticeshipRolesAndFormGuidePage;
