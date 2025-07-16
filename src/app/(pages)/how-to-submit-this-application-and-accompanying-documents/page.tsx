import { HowToSubmitThisApplicationAndAccompanyingDocumentsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HowToSubmitThisApplicationAndAccompanyingDocumentsPage = () => {
  return (
    <CommonPage
      pageTitle={`How to submit this application and accompanying documents`}
      src={HowToSubmitThisApplicationAndAccompanyingDocumentsImage}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default HowToSubmitThisApplicationAndAccompanyingDocumentsPage;
