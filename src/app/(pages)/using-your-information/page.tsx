import { UsingYourInformationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const UsingYourInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Using your information`}
      src={UsingYourInformationImage}
      backRoute="/subject-access-request"
    />
  );
};

export default UsingYourInformationPage;
