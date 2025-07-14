import { SingleLocationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SingleLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`Single Location`}
      src={SingleLocationImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default SingleLocationPage;
