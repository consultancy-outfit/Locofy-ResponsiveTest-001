import { CommunityHealthNhsBloodTransplantImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CommunityHealthNhsBloodTransplantPage = () => {
  return (
    <CommonPage
      pageTitle={` COMMUNITY HEALTH / NHS BLOOD & TRANSPLANT `}
      src={CommunityHealthNhsBloodTransplantImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default CommunityHealthNhsBloodTransplantPage;
