import { InfrastructureOperationsDss02ServiceDeskImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InfrastructureOperationsDss02ServiceDeskPage = () => {
  return (
    <CommonPage
      pageTitle="Infrastructure & Operations/ DSS02 (Service Desk)"
      src={InfrastructureOperationsDss02ServiceDeskImage}
      backRoute="/"
    />
  );
};

export default InfrastructureOperationsDss02ServiceDeskPage;
