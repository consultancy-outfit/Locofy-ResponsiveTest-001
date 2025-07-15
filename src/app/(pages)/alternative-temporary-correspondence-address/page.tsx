import { AlternativeTemporaryCorrespondenceAddressImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AlternativeTemporaryCorrespondenceAddressPage = () => {
  return (
    <CommonPage
      pageTitle={`Alternative temporary correspondence address`}
      src={AlternativeTemporaryCorrespondenceAddressImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default AlternativeTemporaryCorrespondenceAddressPage;
