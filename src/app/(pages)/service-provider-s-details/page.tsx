import { ServiceProviderSDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceProviderSDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Service provider’s details`}
      src={ServiceProviderSDetailsImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default ServiceProviderSDetailsPage;
