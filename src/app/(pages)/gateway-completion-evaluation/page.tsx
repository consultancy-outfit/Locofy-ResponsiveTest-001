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
    link: "/",
    icon: img1GatewayCompletionevaluationImage,
    title: "Gateway, Completion & Evaluation Item 1",
  },
  {
    key: "gateway-2",
    link: "/",
    icon: img2GatewayCompletionevaluationImage,
    title: "Gateway, Completion & Evaluation Item 2",
  },
  {
    key: "gateway-3",
    link: "/",
    icon: img3GatewayCompletionevaluationImage,
    title: "Gateway, Completion & Evaluation Item 3",
  }
];

const GatewayCompletionevaluationPage = () => {
  return (
    <MultiPathPage
      arrayData={GatewayCompletionevaluationPageData}
      pageTitle="Gateway, Completion & Evaluation"
      backRoute="/court-hearing"
    />
  );
};

export default GatewayCompletionevaluationPage;
