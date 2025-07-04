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
    link: "/",
    icon: img1OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 1",
  },
  {
    key: "onboarding-2",
    link: "/",
    icon: img2OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 2",
  },
  {
    key: "onboarding-3",
    link: "/",
    icon: img3OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 3",
  },
  {
    key: "onboarding-4",
    link: "/",
    icon: img4OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 4",
  },
  {
    key: "onboarding-5",
    link: "/",
    icon: img5OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 5",
  },
  {
    key: "onboarding-6",
    link: "/",
    icon: img6OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 6",
  },
  {
    key: "onboarding-7",
    link: "/",
    icon: img7OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 7",
  },
  {
    key: "onboarding-8",
    link: "/",
    icon: img8OnboardinginitialSetupImage,
    title: "Onboarding & Initial Setup Item 8",
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
