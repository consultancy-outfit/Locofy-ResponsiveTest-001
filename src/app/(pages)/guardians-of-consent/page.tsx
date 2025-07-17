"use client";

import { GuardiansOfConsentImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const GuardiansOfConsentPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Mental Health Act 1983 / Guardians of Consent`}
      src={GuardiansOfConsentImage}
      backRoute="/part-iv-consent-to-treatment"
      amendmentButtonRoute="/chap-1-amendment-comparison"
    />
  );
};

export default GuardiansOfConsentPage;
