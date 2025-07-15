"use client";
import { MultiPathPage } from "@/components";
import {
  img1ApprenticeshipFundingRules2024To2025Image,
  img2ApprenticeshipFundingRules2024To2025Image,
  img3ApprenticeshipFundingRules2024To2025Image,
  img4ApprenticeshipFundingRules2024To2025Image,
  img5ApprenticeshipFundingRules2024To2025Image,
  img6ApprenticeshipFundingRules2024To2025Image,
  img7ApprenticeshipFundingRules2024To2025Image,
  img8ApprenticeshipFundingRules2024To2025Image,
  img9ApprenticeshipFundingRules2024To2025Image,
  img10ApprenticeshipFundingRules2024To2025Image,
  img11ApprenticeshipFundingRules2024To2025Image,
} from "@/assets";
import React from "react";

const ApprenticeshipFundingRules2024To2025PageData = [
  {
    key: "apprenticeship-1",
    link: "/apprenticeship-funding-rules-2024-to-2025-document-overview",
    icon: img1ApprenticeshipFundingRules2024To2025Image,
    title: "Introduction and Purpose of the Document",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-2",
    link: "/initial-assessment",
    icon: img2ApprenticeshipFundingRules2024To2025Image,
    title: "Initial Assessment",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-3",
    link: "/programme-eligibility",
    icon: img3ApprenticeshipFundingRules2024To2025Image,
    title: "Programme Eligibility",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-4",
    link: "/what-can-be-funded",
    icon: img4ApprenticeshipFundingRules2024To2025Image,
    title: "What Can Be Funded?",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-5",
    link: "/paying-for-an-apprenticeship",
    icon: img5ApprenticeshipFundingRules2024To2025Image,
    title: "Paying For An Apprenticeship",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-6",
    link: "/change-of-circumstance",
    icon: img6ApprenticeshipFundingRules2024To2025Image,
    title: "Change Of Circumstance",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-7",
    link: "/apprenticeships-funded-by-transfers-of-levy-funds",
    icon: img7ApprenticeshipFundingRules2024To2025Image,
    title: "Apprenticeships Funded By Transfers of Levy Funds",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-8",
    link: "/delivery-models",
    icon: img8ApprenticeshipFundingRules2024To2025Image,
    title: "Delivery Models",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-9",
    link: "/evidence-requirements",
    icon: img9ApprenticeshipFundingRules2024To2025Image,
    title: "Evidence Requirements",
    size: { xs: 12, sm: 6, md: 6, lg: 4 },
  },
  {
    key: "apprenticeship-10",
    link: "/annex-a-residency-eligibility-criteria-who-we-fund",
    icon: img10ApprenticeshipFundingRules2024To2025Image,
    title: "Annex A:Residency Eligibility Criteria (Who We Fund)",
    size: { xs: 12, sm: 6 },
  },
  {
    key: "apprenticeship-11",
    link: "/glossary",
    icon: img11ApprenticeshipFundingRules2024To2025Image,
    title: "Glossary",
    size: { xs: 12, sm: 6 },
  },
];

const ApprenticeshipFundingRules2024To2025Page = () => {
  return (
    <MultiPathPage
      arrayData={ApprenticeshipFundingRules2024To2025PageData}
      pageTitle="Apprenticeship funding rules 2024-2025"
      backRoute="/apprenticeship-funding-rules"
    />
  );
};

export default ApprenticeshipFundingRules2024To2025Page;
