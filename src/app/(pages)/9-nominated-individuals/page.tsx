import { NominatedIndividualSImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NominatedIndividualSPage = () => {
  return (
    <CommonPage
      pageTitle={`9  Nominated individual(s) `}
      src={NominatedIndividualSImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default NominatedIndividualSPage;
