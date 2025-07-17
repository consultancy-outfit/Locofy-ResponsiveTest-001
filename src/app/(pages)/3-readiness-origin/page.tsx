import { ReadinessOriginImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReadinessOriginPage = () => {
  return (
    <CommonPage
      pageTitle={`Readiness & Origin`}
      src={ReadinessOriginImage}
      backRoute="/additional-location-form-for-new-provider-registration-applications-2"
    />
  );
};

export default ReadinessOriginPage;
