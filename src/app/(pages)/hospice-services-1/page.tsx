import { HospiceServices1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const HospiceServices1Page = () => {
  return (
    <CommonPage
      pageTitle={`HOSPICE SERVICES 1`}
      src={HospiceServices1Image}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default HospiceServices1Page;
