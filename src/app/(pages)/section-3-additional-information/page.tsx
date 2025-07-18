import { Section3AdditionalInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section3AdditionalInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 3: Additional Information`}
      src={Section3AdditionalInformationImage}
      backRoute="/application-to-continue-registration-as-a-manager-under-a-new-provide"
    />
  );
};

export default Section3AdditionalInformationPage;
