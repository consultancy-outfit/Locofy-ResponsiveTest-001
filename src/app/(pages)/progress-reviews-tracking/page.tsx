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
    link: "/",
    icon: img1ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 1",
  },
  {
    key: "progress-2",
    link: "/",
    icon: img2ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 2",
  },
  {
    key: "progress-3",
    link: "/",
    icon: img3ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 3",
  },
  {
    key: "progress-4",
    link: "/",
    icon: img4ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 4",
  },
  {
    key: "progress-5",
    link: "/",
    icon: img5ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 5",
  },
  {
    key: "progress-6",
    link: "/",
    icon: img6ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 6",
  },
  {
    key: "progress-7",
    link: "/",
    icon: img7ProgressReviewstrackingImage,
    title: "Progress Reviews & Tracking Item 7",
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
