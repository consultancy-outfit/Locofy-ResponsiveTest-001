import { ReferenceImage1 } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReferencePage1 = () => {
  return (
    <CommonPage
      pageTitle={`Reference`}
      src={ReferenceImage1}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default ReferencePage1;
