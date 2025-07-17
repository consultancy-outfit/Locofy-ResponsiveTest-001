import { DisclosureAndBarringServiceDbsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DisclosureAndBarringServiceDbsPage = () => {
  return (
    <CommonPage
      pageTitle={`Disclosure and Barring Service (DBS)`}
      src={DisclosureAndBarringServiceDbsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default DisclosureAndBarringServiceDbsPage;
