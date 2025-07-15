import { PreviousHistoryAsARegisteredPersonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PreviousHistoryAsARegisteredPersonPage = () => {
  return (
    <CommonPage
      pageTitle={`Previous history as a registered person`}
      src={PreviousHistoryAsARegisteredPersonImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default PreviousHistoryAsARegisteredPersonPage;
