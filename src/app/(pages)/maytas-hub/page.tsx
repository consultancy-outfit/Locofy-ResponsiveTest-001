import { MaytasHubImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MaytasHubPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Maytas Hub`}
      src={MaytasHubImage}
      backRoute="/"
    />
  );
};

export default MaytasHubPage;
