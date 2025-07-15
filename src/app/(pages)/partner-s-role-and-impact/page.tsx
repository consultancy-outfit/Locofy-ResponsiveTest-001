import { PartnerSRoleAndImpactImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartnerSRoleAndImpactPage = () => {
  return (
    <CommonPage
      pageTitle={`Partner's Role and Impact`}
      src={PartnerSRoleAndImpactImage}
      backRoute="/add-a-partner"
    />
  );
};

export default PartnerSRoleAndImpactPage;
