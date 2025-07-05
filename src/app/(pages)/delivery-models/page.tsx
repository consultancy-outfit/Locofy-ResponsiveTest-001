import { DeliveryModelsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeliveryModelsPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /Delivery Models`}
      src={DeliveryModelsImage}
      backRoute="/apprenticeship-funding-rules-2024-to-2025"
    />
  );
};

export default DeliveryModelsPage;
