"use client";
import { MultiPathPage } from "@/components";
import {
  img1TrainingDeliveryoffTheJobLearningImage,
  img2TrainingDeliveryoffTheJobLearningImage,
  img3TrainingDeliveryoffTheJobLearningImage,
  img4TrainingDeliveryoffTheJobLearningImage,
  img5TrainingDeliveryoffTheJobLearningImage,
  img6TrainingDeliveryoffTheJobLearningImage,
  img7TrainingDeliveryoffTheJobLearningImage,
} from "@/assets";
import React from "react";

const TrainingDeliveryoffTheJobLearningPageData = [
  {
    key: "training-1",
    link: "/tjt-evidence-collection-template-23-24-rules-v1-0-2",
    icon: img1TrainingDeliveryoffTheJobLearningImage,
    title: `2023_10_OTJT_Evidence_C
    ollection_Template_-_23_24_Rules_v1.0 (2)`,
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-2",
    link: "/scheme-of-work-mortgage-adviser-level-3",
    icon: img2TrainingDeliveryoffTheJobLearningImage,
    title: "Scheme of work Mortgage Adviser Level 3",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-3",
    link: "/lesson-observation-sample",
    icon: img3TrainingDeliveryoffTheJobLearningImage,
    title: "Lesson-observation-sample",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-4",
    link: "/weekly-journal-example",
    icon: img4TrainingDeliveryoffTheJobLearningImage,
    title: "Weekly journal example",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-5",
    link: "/reflective-learning-journal-rlj",
    icon: img5TrainingDeliveryoffTheJobLearningImage,
    title: "Reflective Learning Journal 2017",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-6",
    link: "/introduction-to-work-based-projects",
    icon: img6TrainingDeliveryoffTheJobLearningImage,
    title: "Introduction-to-work-based-projects",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "training-7",
    link: "/apprenticeship-workplace-assignments-examples",
    icon: img7TrainingDeliveryoffTheJobLearningImage,
    title: "Work Place Assignments #examples",
    size: { xs: 12 },
  },
];

const TrainingDeliveryoffTheJobLearningPage = () => {
  return (
    <MultiPathPage
      arrayData={TrainingDeliveryoffTheJobLearningPageData}
      pageTitle="Training Delivery & Off-the-Job Learning"
      backRoute="/apprenticeship-documents"
    />
  );
};

export default TrainingDeliveryoffTheJobLearningPage;
