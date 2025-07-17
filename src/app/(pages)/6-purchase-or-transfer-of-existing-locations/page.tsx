import { PurchaseOrTransferOfExistingLocationSImag } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PurchaseOrTransferOfExistingLocationSPage = () => {
  return (
    <CommonPage
      pageTitle={`Purchase or transfer of existing location(s)`}
      src={PurchaseOrTransferOfExistingLocationSImag}
      backRoute="/add-location"
    />
  );
};

export default PurchaseOrTransferOfExistingLocationSPage;
