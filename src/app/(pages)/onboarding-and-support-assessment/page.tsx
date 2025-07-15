"use client";
import { MultiPathPage } from "@/components";
import {
  img1OnboardingAndSupportAssessmentImage,
  img2OnboardingAndSupportAssessmentImage,
} from "@/assets";
import React from "react";

const OnboardingAndSupportAssessmentPageData = [
  {
    key: "onboarding-1",
    link: "/induction-checklist-and-feedback-form",
    icon: img1OnboardingAndSupportAssessmentImage,
    title: "Induction Checklist And Feedback Form",
    size: { xs: 12, sm: 6 },
  },
  {
    key: "onboarding-2",
    link: "/learner-support-needs-assessment",
    icon: img2OnboardingAndSupportAssessmentImage,
    title: "Learner Support Needs Assessment",
    size: { xs: 12, sm: 6 },
  },
];

const OnboardingAndSupportAssessmentPage = () => {
  return (
    <MultiPathPage
      arrayData={OnboardingAndSupportAssessmentPageData}
      pageTitle="Onboarding And Support Assessment"
      backRoute="/apprenticeship"
    />
  );
};

export default OnboardingAndSupportAssessmentPage;
