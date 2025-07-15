import { MoreInformationAboutTheFranchisorImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MoreInformationAboutTheFranchisorPage = () => {
  return (
    <CommonPage
      pageTitle={`More information about  the franchisor`}
      src={MoreInformationAboutTheFranchisorImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default MoreInformationAboutTheFranchisorPage;
