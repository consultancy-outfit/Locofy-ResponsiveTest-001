import { WtdHowToRecoverYourDasAccountGuideImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WtdHowToRecoverYourDasAccountGuidePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / WTD How to Recover your DAS Account Guide`}
      src={WtdHowToRecoverYourDasAccountGuideImage}
      backRoute="/das-guidance"
    />
  );
};

export default WtdHowToRecoverYourDasAccountGuidePage;
