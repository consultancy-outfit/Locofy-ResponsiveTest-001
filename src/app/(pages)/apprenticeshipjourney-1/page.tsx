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
import { title } from "process";

const Apprenticeshipjourney1PageData = [
  {
    key: "apprenticeshipjourney-1",
    link: "/overview",
    icon: img1Apprenticeshipjourney1Image,
    title: "Overview",
  },
  {
    key: "apprenticeshipjourney-2",
    link: "/apprentice-learner",
    icon: img2Apprenticeshipjourney1Image,
    title: "Apprentice/Learner",
  },
  {
    key: "apprenticeshipjourney-3",
    link: "/employer",
    icon: img3Apprenticeshipjourney1Image,
    title: "Employer",
  },
  {
    key: "apprenticeshipjourney-4",
    link: "/collegeinstitute",
    icon: img4Apprenticeshipjourney1Image,
    title: "College/Institute",
  },
  {
    key: "apprenticeshipjourney-5",
    link: "/epao-end-point-assessment-organisation",
    icon: img5Apprenticeshipjourney1Image,
    title: "EPAO (End-Point Assessment Organisation)",
  },
  {
    key: "apprenticeshipjourney-6",
    link: "/government-regulatory-actors",
    icon: img6Apprenticeshipjourney1Image,
    title: "Government & Regulatory Actors",
  },
  {
    key: "apprenticeshipjourney-7",
    link: "/key-documents-required-for-compliance",
    icon: img7Apprenticeshipjourney1Image,
    title: "Key Documents Required for Compliance",
  },
  {
    key: "apprenticeshipjourney-8",
    link: "/apprenticeship-documents",
    icon: img8Apprenticeshipjourney1Image,
    title: "Apprenticeship Documents (Received via Zip Folder) ",
  },
  {
    key: "apprenticeshipjourney-9",
    link: "/apprenticeships-listing-process",
    icon: img9Apprenticeshipjourney1Image,
    title: "Apprenticeship Documents (Received via Email)",
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
