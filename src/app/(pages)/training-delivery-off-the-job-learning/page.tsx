"use client";
import { MultiPathPage } from "@/components";
import {
  img1TrainingDeliveryoffTheJobLearningImage,
  img2TrainingDeliveryoffTheJobLearningImage,
  img3TrainingDeliveryoffTheJobLearningImage,
  img4TrainingDeliveryoffTheJobLearningImage,
  img5TrainingDeliveryoffTheJobLearningImage,
  img6TrainingDeliveryoffTheJobLearningImage,
  img7TrainingDeliveryoffTheJobLearningImage
} from "@/assets";
import React from "react";

const TrainingDeliveryoffTheJobLearningPageData = [
  {
    key: "training-1",
    link: "/",
    icon: img1TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 1",
  },
  {
    key: "training-2",
    link: "/",
    icon: img2TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 2",
  },
  {
    key: "training-3",
    link: "/",
    icon: img3TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 3",
  },
  {
    key: "training-4",
    link: "/",
    icon: img4TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 4",
  },
  {
    key: "training-5",
    link: "/",
    icon: img5TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 5",
  },
  {
    key: "training-6",
    link: "/",
    icon: img6TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 6",
  },
  {
    key: "training-7",
    link: "/",
    icon: img7TrainingDeliveryoffTheJobLearningImage,
    title: "Training Delivery & Off-the-Job Learning Item 7",
  }
];

const TrainingDeliveryoffTheJobLearningPage = () => {
  return (
    <MultiPathPage
      arrayData={TrainingDeliveryoffTheJobLearningPageData}
      pageTitle="Training Delivery & Off-the-Job Learning"
      backRoute="/court-hearing"
    />
  );
};

export default TrainingDeliveryoffTheJobLearningPage;
