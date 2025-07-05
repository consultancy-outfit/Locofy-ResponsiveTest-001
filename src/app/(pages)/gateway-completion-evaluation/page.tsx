"use client";
import { MultiPathPage } from "@/components";
import {
  img1GatewayCompletionevaluationImage,
  img2GatewayCompletionevaluationImage,
  img3GatewayCompletionevaluationImage
} from "@/assets";
import React from "react";

const GatewayCompletionevaluationPageData = [
  {
    key: "gateway-1",
    link: "/england-apprenticeship-certificste-example",
    icon: img1GatewayCompletionevaluationImage,
    title: "England_apprenticeship certificste example",
  },
  {
    key: "gateway-2",
    link: "/generic-guidance-gateway-form",
    icon: img2GatewayCompletionevaluationImage,
    title: "Generic-Guidance - Gateway form",
  },
  {
    key: "gateway-3",
    link: "/post-programme-apprentice-evaluation-form",
    icon: img3GatewayCompletionevaluationImage,
    title: "Post Programme Apprentice Evaluation Form",
  }
];

const GatewayCompletionevaluationPage = () => {
  return (
    <MultiPathPage
      arrayData={GatewayCompletionevaluationPageData}
      pageTitle="Gateway, Completion & Evaluation"
       backRoute="/apprenticeship-documents"
    />
  );
};

export default GatewayCompletionevaluationPage;
