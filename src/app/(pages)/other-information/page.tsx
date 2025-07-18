import { otherinformation, ThePartnershipSNameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OtherInformationPage = () => {
  return (
    <CommonPage
      pageTitle={`Other Information`}
      src={otherinformation}
      backRoute="/remove-a-location"
    />
  );
};

export default OtherInformationPage;
