import { PartnerSSignatureImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PartnerSSignaturePage1 = () => {
  return (
    <CommonPage
      pageTitle={` Partner’s Signature`}
      src={PartnerSSignatureImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default PartnerSSignaturePage1;
