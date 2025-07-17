import { ServiceUserBandsImag } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUserBandsPage = () => {
  return (
    <CommonPage
      pageTitle={`Service user bands `}
      src={ServiceUserBandsImag}
      backRoute="/add-location"
    />
  );
};

export default ServiceUserBandsPage;
