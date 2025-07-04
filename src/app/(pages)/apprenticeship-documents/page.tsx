"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipDocumentsImage,
  img2ApprenticeshipDocumentsImage,
  img3ApprenticeshipDocumentsImage,
  img4ApprenticeshipDocumentsImage,
  img5ApprenticeshipDocumentsImage,
  img6ApprenticeshipDocumentsImage,
  img7ApprenticeshipDocumentsImage,
  img8ApprenticeshipDocumentsImage
} from "@/assets";
import React from "react";

const ApprenticeshipDocumentsPageData = [
  {
    key: "apprenticeship-1",
    link: "/",
    icon: img1ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 1",
  },
  {
    key: "apprenticeship-2",
    link: "/",
    icon: img2ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 2",
  },
  {
    key: "apprenticeship-3",
    link: "/",
    icon: img3ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 3",
  },
  {
    key: "apprenticeship-4",
    link: "/",
    icon: img4ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 4",
  },
  {
    key: "apprenticeship-5",
    link: "/",
    icon: img5ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 5",
  },
  {
    key: "apprenticeship-6",
    link: "/",
    icon: img6ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 6",
  },
  {
    key: "apprenticeship-7",
    link: "/",
    icon: img7ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 7",
  },
  {
    key: "apprenticeship-8",
    link: "/",
    icon: img8ApprenticeshipDocumentsImage,
    title: "Apprenticeship Documents Item 8",
  }
];

const ApprenticeshipDocumentsPage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipDocumentsPageData}
      pageTitle="Apprenticeship Documents"
      backRoute="/court-hearing"
    />
  );
};

export default ApprenticeshipDocumentsPage;
