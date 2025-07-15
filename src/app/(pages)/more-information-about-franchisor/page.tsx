import { MoreInformationAboutFranchisorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MoreInformationAboutFranchisorPage = () => {
  return (
    <CommonPage
      pageTitle={`More information about franchisor`}
      src={MoreInformationAboutFranchisorImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MoreInformationAboutFranchisorPage;
