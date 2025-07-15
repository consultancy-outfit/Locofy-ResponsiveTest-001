"use client";
import { MultiPathPage } from "@/components";
import {
  FACAPPlicationMainImageone,
  FACAPPlicationMainImagetwo,
  FACAPPlicationMainImagethree,
  FcaApplicationMainImagefour
} from "@/assets";
import React from "react";

const FcaApplicationPageData = [
  {
    key: "fca-1",
    link: "/fca-overview",
    icon: FACAPPlicationMainImageone,
    title: "FCA Overview",
  },
  {
    key: "fca-2",
    link: "/removal-of-patients-to-channel-islands-or-isle-of-man",
    icon: FACAPPlicationMainImagetwo,
    title: "Payment Services New Authorisation  Registration",
  },
  {
    key: "fca-3",
    link: "/e-money-new-authorisation-registration",
    icon: FACAPPlicationMainImagethree,
    title: "E-Money New Authorisation / Registration",
  },
  {
    key: "fca-4",
    link: "/payment-services-and-electronic-money-our-approach",
    icon: FcaApplicationMainImagefour,
    title: "Payment Services and Electronic Money – Our Approach",
  }
];

const FcaApplicationPage = () => {
  return (
    <MultiPathPage
      arrayData={FcaApplicationPageData}
      pageTitle="FCA Application"
      backRoute="/"
    />
  );
};

export default FcaApplicationPage;
