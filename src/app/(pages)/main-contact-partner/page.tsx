import { MainContactPartnerImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MainContactPartnerPage = () => {
  return (
    <CommonPage
      pageTitle={`Main Contact Partner`}
      src={MainContactPartnerImage}
      backRoute="/add-a-partner"
    />
  );
};

export default MainContactPartnerPage;
