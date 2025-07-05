"use client";
import { MultiPathPage } from "@/components";
import {
  img1OnboardinginitialSetupImage,
  img2OnboardinginitialSetupImage,
  img3OnboardinginitialSetupImage,
  img4OnboardinginitialSetupImage,
  img5OnboardinginitialSetupImage,
  img6OnboardinginitialSetupImage,
  img7OnboardinginitialSetupImage,
  img8OnboardinginitialSetupImage
} from "@/assets";
import React from "react";

const OnboardinginitialSetupPageData = [
  {
    key: "onboarding-1",
    link: "/apprentice-employment-offer-letter",
    icon: img1OnboardinginitialSetupImage,
    title: "Apprentice Employment Offer Letter",
  },
  {
    key: "onboarding-2",
    link: "/apprenticeship-training-plan-specification",
    icon: img2OnboardinginitialSetupImage,
    title: "Apprenticeship-Training-Plan-Specification ",
  },
  {
    key: "onboarding-3",
    link: "/app3-checklistmanagementuniversityapprenticeships",
    icon: img3OnboardinginitialSetupImage,
    title: "APP3_ChecklistManagementUniversityApprenticeships",
  },
  {
    key: "onboarding-4",
    link: "/individual-learning-plan-template",
    icon: img4OnboardinginitialSetupImage,
    title: "Individual_Learning_Plan_Template",
  },
  {
    key: "onboarding-5",
    link: "/skill-scan",
    icon: img5OnboardinginitialSetupImage,
    title: "Skills Scan",
  },
  {
    key: "onboarding-6",
    link: "/a1a-learning-support-plan-basic-march-21-v1-1",
    icon: img6OnboardinginitialSetupImage,
    title: "a1a.-Learning-Support-Plan-Basic-March-21-V1-1",
  },
  {
    key: "onboarding-7",
    link: "/wtd-non-levy-agreement-v1",
    icon: img7OnboardinginitialSetupImage,
    title: "WTD Levy & Non-Levy Agreement V1",
  },
  {
    key: "onboarding-8",
    link: "/performa-template-wtd-2025-performa-template-wtd-2025",
    icon: img8OnboardinginitialSetupImage,
    title: "Performa Template WTD 2025",
  }
];

const OnboardinginitialSetupPage = () => {
  return (
    <MultiPathPage
      arrayData={OnboardinginitialSetupPageData}
      pageTitle="Onboarding & Initial Setup"
      backRoute="/court-hearing"
    />
  );
};

export default OnboardinginitialSetupPage;
