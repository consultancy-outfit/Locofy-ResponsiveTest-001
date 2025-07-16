import { PurchaseOrTransferOfExistingLocations } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurchaseOrTransferOfExistingLocationSPage1 = () => {
  return (
    <CommonPage
      pageTitle={`6.1 Purchase or transfer of existing location(s)`}
      src={PurchaseOrTransferOfExistingLocations}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default PurchaseOrTransferOfExistingLocationSPage1;
