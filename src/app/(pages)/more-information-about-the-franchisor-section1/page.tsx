import { MoreInformationAboutTheFranchisorImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MoreInformationAboutTheFranchisorPage1 = () => {
  return (
    <CommonPage
      pageTitle={`More information about the franchisor`}
      src={MoreInformationAboutTheFranchisorImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MoreInformationAboutTheFranchisorPage1;
