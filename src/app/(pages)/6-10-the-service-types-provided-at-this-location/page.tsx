import { TheServiceTypesProvidedAtThisLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheServiceTypesProvidedAtThisLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`6.10 The service types provided at this location `}
      src={TheServiceTypesProvidedAtThisLocationImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default TheServiceTypesProvidedAtThisLocationPage;
