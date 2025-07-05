"use client";
import { MultiPathPage } from "@/components";
import {
  img1ProgressReviewstrackingImage,
  img2ProgressReviewstrackingImage,
  img3ProgressReviewstrackingImage,
  img4ProgressReviewstrackingImage,
  img5ProgressReviewstrackingImage,
  img6ProgressReviewstrackingImage,
  img7ProgressReviewstrackingImage
} from "@/assets";
import React from "react";

const ProgressReviewstrackingPageData = [
  {
    key: "progress-1",
    link: "/individual-learner-progress-review-form",
    icon: img1ProgressReviewstrackingImage,
    title: "Individual Learner progress review",
  },
  {
    key: "progress-2",
    link: "/progress-review-and-target-setting-report",
    icon: img2ProgressReviewstrackingImage,
    title: "Progress Review and Target Setting Report",
  },
  {
    key: "progress-3",
    link: "/way-feedback-form",
    icon: img3ProgressReviewstrackingImage,
    title: "3 Way Feedback form",
  },
  {
    key: "progress-4",
    link: "/",
    icon: img4ProgressReviewstrackingImage,
    title: "AWD-SETA-Good-Practice-Progress-Review-Form",
  },
  {
    key: "progress-5",
    link: "/awd-seta-good-practice-progress-review-form",
    icon: img5ProgressReviewstrackingImage,
    title: "completed-apprentice-progress-review-example",
  },
  {
    key: "progress-6",
    link: "/example-group-progress-tracker-accredited",
    icon: img6ProgressReviewstrackingImage,
    title: "example-group-progress-tracker-accredited",
  },
  {
    key: "progress-7",
    link: "/employer-training-plan-toolkit-for-apprenticeships",
    icon: img7ProgressReviewstrackingImage,
    title: "Employer-Training-Plan-Toolkit-for-Apprenticeships",
  }
];

const ProgressReviewstrackingPage = () => {
  return (
    <MultiPathPage
      arrayData={ProgressReviewstrackingPageData}
      pageTitle="Progress Reviews & Tracking"
      backRoute="/court-hearing"
    />
  );
};

export default ProgressReviewstrackingPage;
