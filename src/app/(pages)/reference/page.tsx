import { ReferenceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReferencePage = () => {
  return (
    <CommonPage
      pageTitle={`Reference`}
      src={ReferenceImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default ReferencePage;
