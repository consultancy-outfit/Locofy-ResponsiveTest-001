import { Section1ApplicationDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section1ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 1: Application details`}
      src={Section1ApplicationDetailsImage}
      backRoute="/application-to-continue-registration-as-a-manager-under-a-new-provide"
    />
  );
};

export default Section1ApplicationDetailsPage;
