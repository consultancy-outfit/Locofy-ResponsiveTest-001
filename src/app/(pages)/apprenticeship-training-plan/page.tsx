"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipTrainingPlanImage,
  img2ApprenticeshipTrainingPlanImage,
  img3ApprenticeshipTrainingPlanImage
} from "@/assets";
import React from "react";

const ApprenticeshipTrainingPlanPageData = [
  {
    key: "apprenticeship-1",
    link: "/apprenticeship-training-plan-business-administrator-level-3-v3-27022025",
    icon: img1ApprenticeshipTrainingPlanImage,
    title: `Apprenticeship Training Plan - 
    Business Administrator Level 
    3 -V3 -27022025`,
  },
  {
    key: "apprenticeship-2",
    link: "/apprenticeship-training-plan-operational-manager-v3-2702025",
    icon: img2ApprenticeshipTrainingPlanImage,
    title: `Apprenticeship Training Plan 
    Operational Manager V3  
    2702025`,
  },
  {
    key: "apprenticeship-3",
    link: "/apprenticeship-training-plan-team-leader-new-level-3-v3-27022025",
    icon: img3ApprenticeshipTrainingPlanImage,
    title: `Apprenticeship Training Plan 
    - Team Leader New Level 3 - 
    V3 27022025 (`,
  }
];

const ApprenticeshipTrainingPlanPage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipTrainingPlanPageData}
      pageTitle="Apprenticeship Training Plan "
      backRoute="/apprenticeship"
    />
  );
};

export default ApprenticeshipTrainingPlanPage;
