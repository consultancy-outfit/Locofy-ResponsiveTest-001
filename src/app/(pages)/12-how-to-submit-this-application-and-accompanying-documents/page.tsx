import { HowToSubmitThisApplicationAndAccompanyingDocumentsImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HowToSubmitThisApplicationAndAccompanyingDocumentsPage = () => {
  return (
    <CommonPage
      pageTitle={`How to submit this application and accompanying documents`}
      src={HowToSubmitThisApplicationAndAccompanyingDocumentsImg}
      backRoute="/add-location"
    />
  );
};

export default HowToSubmitThisApplicationAndAccompanyingDocumentsPage;
