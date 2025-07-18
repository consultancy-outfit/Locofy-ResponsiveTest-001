import { DomiciliaryDentalOnly9Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DomiciliaryDentalOnly9Page = () => {
  return (
    <CommonPage
      pageTitle={`Domiciliary Dental Only`}
      src={DomiciliaryDentalOnly9Image}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default DomiciliaryDentalOnly9Page;
