
import { FcaOverviewImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const FcaOverviewPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`FCA Application / FCA Overview`}
      src={FcaOverviewImage}
      backRoute="/fca-application" 
      amendmentButtonRoute="/fca-application"
      amendmentButtonTitle="View FCA Details" 
    />
  );
};

export default FcaOverviewPage;