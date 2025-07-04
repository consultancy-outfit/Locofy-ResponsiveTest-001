import { GlossaryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GlossaryPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Funding Rules / Glossary`}
      src={GlossaryImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default GlossaryPage;
