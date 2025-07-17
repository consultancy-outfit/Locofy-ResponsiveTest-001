import { Howtosubmitthisapplication } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HowToSubmitThisApplicationPage = () => {
  return (
    <CommonPage
      pageTitle={`How to submit this application`}
      src={Howtosubmitthisapplication}
      backRoute="/remove-a-location"
    />
  );
};

export default HowToSubmitThisApplicationPage;
