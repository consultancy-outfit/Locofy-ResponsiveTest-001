import { ApprenticeshipsFundedByTransfersOfLevyFundsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApprenticeshipsFundedByTransfersOfLevyFundsPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /Apprenticeships funded by transfers of levy funds`}
      src={ApprenticeshipsFundedByTransfersOfLevyFundsImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default ApprenticeshipsFundedByTransfersOfLevyFundsPage;
