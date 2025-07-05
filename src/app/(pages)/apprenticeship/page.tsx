"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipImage,
  img2ApprenticeshipImage,
  img3ApprenticeshipImage,
  img4ApprenticeshipImage,
  img5ApprenticeshipImage,
  img6ApprenticeshipImage,
  img7ApprenticeshipImage,
} from "@/assets";
import React from "react";

const ApprenticeshipPageData = [
  {
    key: "apprenticeship-1",
    link: "/overview-of-apprenticeship-delivery-process",
    icon: img1ApprenticeshipImage,
    title: "Apprenticeship Overview",
  },
  {
    key: "apprenticeship-2",
    link: "/onboarding-and-support-assessment",
    icon: img2ApprenticeshipImage,
    title: "Learner Onboarding And Support Assessment Form",
  },
  {
    key: "apprenticeship-3",
    link: "/das-guidance",
    icon: img3ApprenticeshipImage,
    title: "DAS Guidance",
  },
  {
    key: "apprenticeship-4",
    link: "/apprenticeship-funding-rules",
    icon: img4ApprenticeshipImage,
    title: "Apprenticeship Funding Rules",
  },
  {
    key: "apprenticeship-5",
    link: "/apprenticeship-training-plan",
    icon: img5ApprenticeshipImage,
    title: "Apprenticeship Training Plan",
  },
  {
    key: "apprenticeship-6",
    link: "/find-an-end-point-assessment-organisation-epao-for-you-apprentice",
    icon: img6ApprenticeshipImage,
    title:
      "Find An End Point Assessment Organisation (EPAO) For You Apprentice",
  },
  {
    key: "apprenticeship-7",
    link: "/apprenticeship-roles-and-form-guide",
    icon: img7ApprenticeshipImage,
    title: "Apprenticeship Roles & Form Guide",
  },
];

const ApprenticeshipPage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipPageData}
      pageTitle="Apprenticeship"
      backRoute="/apprenticeships-listing-process"
    />
  );
};

export default ApprenticeshipPage;
