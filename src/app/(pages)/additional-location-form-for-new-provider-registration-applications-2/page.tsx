import { AdditionalLocationFormForNewProviderRegistrationApplications2Image } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "A",
    title: "Location Identity",
    href: "/1-location-identity",
    coords: "36,721,380,789",
    shape: "rect",
  },
  {
    alt: "A",
    title: "Readiness & Origin",
    href: "/3-readiness-origin",
    coords: "36,981,391,1053",
    shape: "rect",
  },
  {
    alt: "A",
    title: "Legal & Safety Compliance",
    href: "/2-legal-safety-compliance",
    coords: "30,1247,491,1329",
    shape: "rect",
  },
  {
    alt: "A",
    title: "Regulated Activities",
    href: "/5-regulated-activities",
    coords: "31,1766,399,1845",
    shape: "rect",
  },
  {
    alt: "A",
    title: "Service Types",
    href: "/4-service-types",
    coords: "46,2091,335,2179",
    shape: "rect",
  },
];


const AdditionalLocationFormForNewProviderRegistrationApplications2Page = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Additional location form for new provider registration applications`}
      image={AdditionalLocationFormForNewProviderRegistrationApplications2Image}
      areas={areas}
      backRoute="/manage-location"
    />
  );
};

export default AdditionalLocationFormForNewProviderRegistrationApplications2Page;
