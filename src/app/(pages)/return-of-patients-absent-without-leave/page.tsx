import { ReturnOfPatientsAbsentWithoutLeaveImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ReturnOfPatientsAbsentWithoutLeavePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health  Act 1983 / Part VI /  Return of patients absent without leave`}
      src={ReturnOfPatientsAbsentWithoutLeaveImage}
      backRoute="/mental-health-act-1983-part-6"
      amendmentButtonRoute="/return-of-patients-absent-without-leave-ac"
    />
  );
};

export default ReturnOfPatientsAbsentWithoutLeavePage;
