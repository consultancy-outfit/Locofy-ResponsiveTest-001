import { WtdNonLevyAgreementV1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WtdNonLevyAgreementV1Page = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship Roles & Forms Guide / WTD Non-Levy Agreement V1`}
      src={WtdNonLevyAgreementV1Image}
      backRoute="/onboarding-initial-setup"
    />
  );
};

export default WtdNonLevyAgreementV1Page;
