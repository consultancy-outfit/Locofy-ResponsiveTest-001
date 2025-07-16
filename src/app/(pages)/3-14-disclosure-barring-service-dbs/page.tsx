import { DisclosureBarringServiceDbsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisclosureBarringServiceDbsPage = () => {
  return (
    <CommonPage
      pageTitle={`3.14  Disclosure & Barring Service (DBS)`}
      src={DisclosureBarringServiceDbsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DisclosureBarringServiceDbsPage;
