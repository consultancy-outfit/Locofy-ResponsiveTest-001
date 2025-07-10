"use client";
import { MultiPathPage } from "@/components";
import {
  img1ProgressReviewstrackingImage,
  img2ProgressReviewstrackingImage,
  img3ProgressReviewstrackingImage,
  img4ProgressReviewstrackingImage,
  img5ProgressReviewstrackingImage,
  img6ProgressReviewstrackingImage,
  img7ProgressReviewstrackingImage,
} from "@/assets";
import React from "react";

const ProgressReviewstrackingPageData = [
  {
    key: "progress-1",
    link: "/individual-learner-progress-review-form",
    icon: img1ProgressReviewstrackingImage,
    title: "Individual Learner progress review",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-2",
    link: "/progress-review-and-target-setting-report",
    icon: img2ProgressReviewstrackingImage,
    title: "Progress Review and Target Setting Report",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-3",
    link: "/way-feedback-form",
    icon: img3ProgressReviewstrackingImage,
    title: "3 Way Feedback form",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-4",
    link: "/awd-seta-good-practice-progress-review-form",
    icon: img4ProgressReviewstrackingImage,
    title: "AWD-SETA-Good-Practice-Progress-Review-Form",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-5",
    link: "/completed-apprentice-progress-review-exemplar-word-doc",
    icon: img5ProgressReviewstrackingImage,
    title: "completed-apprentice-progress-review-example",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-6",
    link: "/example-group-progress-tracker-accredited",
    icon: img6ProgressReviewstrackingImage,
    title: "example-group-progress-tracker-accredited",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "progress-7",
    link: "/employer-training-plan-toolkit-for-apprenticeships",
    icon: img7ProgressReviewstrackingImage,
    title: "Employer-Training-Plan-Toolkit-for-Apprenticeships",
    size: { xs: 12 },
  },
];

const ProgressReviewstrackingPage = () => {
  return (
    <MultiPathPage
      arrayData={ProgressReviewstrackingPageData}
      pageTitle="Progress Reviews & Tracking"
      backRoute="/apprenticeship-documents"
    />
  );
};

export default ProgressReviewstrackingPage;
