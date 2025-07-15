import { 314DisclosureBarringServiceDbsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const 314DisclosureBarringServiceDbsPage = () => {
  return (
    <CommonPage
      pageTitle={`3.14  Disclosure & Barring Service (DBS)`}
      src={314DisclosureBarringServiceDbsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default 314DisclosureBarringServiceDbsPage;
