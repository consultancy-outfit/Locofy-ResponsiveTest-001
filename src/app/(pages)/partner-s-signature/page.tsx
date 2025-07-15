import { PartnerSSignatureImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartnerSSignaturePage = () => {
  return (
    <CommonPage
      pageTitle={`Partner's Signature`}
      src={PartnerSSignatureImage}
      backRoute="/add-a-partner"
    />
  );
};

export default PartnerSSignaturePage;
