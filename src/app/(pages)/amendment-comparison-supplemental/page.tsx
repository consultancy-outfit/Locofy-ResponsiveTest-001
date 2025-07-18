import { AmendmentComparisonSupplementalImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AmendmentComparisonSupplementalPage = () => {
  return (
    <CommonPage
      pageTitle={`Mental Health / Mental Health Act 1983 / Amendment Comparison - Supplemental    `}
      src={AmendmentComparisonSupplementalImage}
      backRoute="/part-27"
    />
  );
};

export default AmendmentComparisonSupplementalPage;
