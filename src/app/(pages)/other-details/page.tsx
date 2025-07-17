import { OtherDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OtherDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Other details`}
      src={OtherDetailsImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default OtherDetailsPage;
