"use client";
import { MultiPathPage } from "@/components";
import {
  img1Apprenticeshipjourney1Image,
  img2Apprenticeshipjourney1Image,
  img3Apprenticeshipjourney1Image,
  img4Apprenticeshipjourney1Image,
  img5Apprenticeshipjourney1Image,
  img6Apprenticeshipjourney1Image,
  img7Apprenticeshipjourney1Image,
  img8Apprenticeshipjourney1Image,
  img9Apprenticeshipjourney1Image,

} from "@/assets";
import React from "react";

const Apprenticeshipjourney1PageData = [
  {
    key: "apprenticeshipjourney-1",
    link: "/",
    icon: img1Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-2",
    link: "/",
    icon: img2Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-3",
    link: "/",
    icon: img3Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-4",
    link: "/",
    icon: img4Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-5",
    link: "/",
    icon: img5Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-6",
    link: "/",
    icon: img6Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-7",
    link: "/",
    icon: img7Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-8",
    link: "/",
    icon: img8Apprenticeshipjourney1Image,
  },
  {
    key: "apprenticeshipjourney-9",
    link: "/",
    icon: img9Apprenticeshipjourney1Image,
  },
 
];

const Apprenticeshipjourney1Page = () => {
  return (
    <MultiPathPage
      arrayData={Apprenticeshipjourney1PageData}
      pageTitle="Apprenticeship Journey "
      backRoute="/"
    />
  );
};

export default Apprenticeshipjourney1Page;
