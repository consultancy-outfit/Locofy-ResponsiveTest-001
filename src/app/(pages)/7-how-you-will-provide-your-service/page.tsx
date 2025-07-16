import { HowYouWillProvideYourServiceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HowYouWillProvideYourServicePage = () => {
  return (
    <CommonPage
      pageTitle={`How you will provide your service`}
      src={HowYouWillProvideYourServiceImage}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default HowYouWillProvideYourServicePage;
