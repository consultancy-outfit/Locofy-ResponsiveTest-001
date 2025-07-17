import { TheInformationYouAreRequestingImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheInformationYouAreRequestingPage = () => {
  return (
    <CommonPage
      pageTitle={`The Information you are requesting`}
      src={TheInformationYouAreRequestingImage}
      backRoute="/subject-access-request"
    />
  );
};

export default TheInformationYouAreRequestingPage;
