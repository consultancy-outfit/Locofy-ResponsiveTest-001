import { ServiceTypesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ServiceTypesPage = () => {
  return (
    <CommonPage
      pageTitle={`Service Types`}
      src={ServiceTypesImage}
      backRoute="/additional-location-form-for-new-provider-registration-applications-2"
    />
  );
};

export default ServiceTypesPage;
