import { WtdEmployerDasSetupGuideImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WtdEmployerDasSetupGuidePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / WTD Employer DAS setup Guide`}
      src={WtdEmployerDasSetupGuideImage}
      backRoute="/das-guidance"
    />
  );
};

export default WtdEmployerDasSetupGuidePage;
