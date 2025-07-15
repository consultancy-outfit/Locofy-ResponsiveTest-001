"use client";
import { MultiPathPage } from "@/components";
import {
  img1DasGuidanceImage,
  img2DasGuidanceImage,
  img3DasGuidanceImage,
  img4DasGuidanceImage,
  img5DasGuidanceImage,
} from "@/assets";
import React from "react";

const DasGuidancePageData = [
  {
    key: "das-1",
    link: "/wtd-employer-allocating-funds-creating-cohorts",
    icon: img1DasGuidanceImage,
    title: "WTD Employer Allocating Funds & Creating Cohorts",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "das-2",
    link: "/wtd-employer-das-setup-guide",
    icon: img2DasGuidanceImage,
    title: "WTD Employer DAS Setup Guide",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "das-3",
    link: "wtd-how-to-check-your-balance-on-your-das-account",
    icon: img3DasGuidanceImage,
    title: "WTD How To Check Your Balance On Your DAS Account",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "das-4",
    link: "/wtd-how-to-close-down-completed-learners-on-das",
    icon: img4DasGuidanceImage,
    title: "WTD How To Close Down Completed Learners On DAS",
    size: { xs: 12, sm: 6 },
  },
  {
    key: "das-5",
    link: "/wtd-how-to-recover-your-das-account-guide",
    icon: img5DasGuidanceImage,
    title: "WTD How To Recover Your DAS Account Guide",
    size: { xs: 12, sm: 6 },
  },
];

const DasGuidancePage = () => {
  return (
    <MultiPathPage
      arrayData={DasGuidancePageData}
      pageTitle="DAS Guidance"
      backRoute="/apprenticeship"
    />
  );
};

export default DasGuidancePage;
