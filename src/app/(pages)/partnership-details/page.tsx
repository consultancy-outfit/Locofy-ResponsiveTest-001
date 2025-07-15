import { PartnershipDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartnershipDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Partnership Details`}
      src={PartnershipDetailsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default PartnershipDetailsPage;
