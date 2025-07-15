import { DirectorsOrEquivalentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DirectorsOrEquivalentPage = () => {
  return (
    <CommonPage
      pageTitle={`Directors or equivalent`}
      src={DirectorsOrEquivalentImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default DirectorsOrEquivalentPage;
