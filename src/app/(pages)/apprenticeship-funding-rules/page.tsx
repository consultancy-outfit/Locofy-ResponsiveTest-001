"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipFundingRulesImage,
  img2ApprenticeshipFundingRulesImage
} from "@/assets";
import React from "react";

const ApprenticeshipFundingRulesPageData = [
  {
    key: "apprenticeship-1",
    link: "/apprenticeship-funding-rules-2024-to-2025-summary-of-changes",
    icon: img1ApprenticeshipFundingRulesImage,
    title: "Apprenticeship Funding Rules 2024 To 2025_Summary Of Changes",
  },
  {
    key: "apprenticeship-2",
    link: "/apprenticeship-funding-rules-2024-to-2025",
    icon: img2ApprenticeshipFundingRulesImage,
    title: `Apprenticeship_funding_rules
    _2024_to_2025`,
  }
];

const ApprenticeshipFundingRulesPage = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipFundingRulesPageData}
      pageTitle="Apprenticeship funding rules"
      backRoute="/apprenticeship"
    />
  );
};

export default ApprenticeshipFundingRulesPage;
