import { SafeguardingDbsBarsOrInvestigationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SafeguardingDbsBarsOrInvestigationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Safeguarding, DBS Bars, or Investigations`}
      src={SafeguardingDbsBarsOrInvestigationsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default SafeguardingDbsBarsOrInvestigationsPage;
