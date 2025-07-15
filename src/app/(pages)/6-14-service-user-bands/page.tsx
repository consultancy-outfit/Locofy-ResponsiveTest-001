import { ServiceUserBandsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUserBandsPage = () => {
  return (
    <CommonPage
      pageTitle={`6.14 Service user bands`}
      src={ServiceUserBandsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default ServiceUserBandsPage;
