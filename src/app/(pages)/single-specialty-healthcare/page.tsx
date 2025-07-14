import { SingleSpecialtyHealthcareImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SingleSpecialtyHealthcarePage = () => {
  return (
    <CommonPage
      pageTitle={` SINGLE SPECIALTY HEALTHCARE `}
      src={SingleSpecialtyHealthcareImage}
      backRoute="/cqc-fee-structure"
    />
  );
};

export default SingleSpecialtyHealthcarePage;
