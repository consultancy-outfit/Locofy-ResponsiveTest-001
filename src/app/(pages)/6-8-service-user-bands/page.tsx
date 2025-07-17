import { ServiceUserBandsImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceUserBandsPage = () => {
  return (
    <CommonPage
      pageTitle={`Service user bands`}
      src={ServiceUserBandsImg}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default ServiceUserBandsPage;
