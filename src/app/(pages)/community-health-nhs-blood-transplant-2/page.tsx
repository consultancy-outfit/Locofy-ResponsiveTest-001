import { CommunityHealthNhsBloodTransplant2Img } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CommunityHealthNhsBloodTransplant2Page = () => {
  return (
    <CommonPage
      pageTitle={`COMMUNITY HEALTH / NHS BLOOD & TRANSPLANT `}
      src={CommunityHealthNhsBloodTransplant2Img}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default CommunityHealthNhsBloodTransplant2Page;
