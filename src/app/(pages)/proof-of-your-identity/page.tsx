import { ProofOfYourIdentityImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProofOfYourIdentityPage = () => {
  return (
    <CommonPage
      pageTitle={`Proof of your identity`}
      src={ProofOfYourIdentityImage}
      backRoute="/subject-access-request"
    />
  );
};

export default ProofOfYourIdentityPage;
