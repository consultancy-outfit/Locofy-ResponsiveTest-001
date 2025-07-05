import { WhatCanBeFundedImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WhatCanBeFundedPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /What Can Be Funded?`}
      src={WhatCanBeFundedImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default WhatCanBeFundedPage;
