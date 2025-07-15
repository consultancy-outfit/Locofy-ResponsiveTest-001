import { AdministrationReceivershipAndOtherInsolvencyProcessesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdministrationReceivershipAndOtherInsolvencyProcessesPage = () => {
  return (
    <CommonPage
      pageTitle={`4.2  Administration, receivership, and other insolvency processes`}
      src={AdministrationReceivershipAndOtherInsolvencyProcessesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default AdministrationReceivershipAndOtherInsolvencyProcessesPage;
