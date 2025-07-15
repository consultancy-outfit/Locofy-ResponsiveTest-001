import { OutOfHoursWalkInImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const OutOfHoursWalkInPage = () => {
  return (
    <CommonPage
      pageTitle={`Out-of-Hours / Walk-In`}
      src={OutOfHoursWalkInImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default OutOfHoursWalkInPage;
