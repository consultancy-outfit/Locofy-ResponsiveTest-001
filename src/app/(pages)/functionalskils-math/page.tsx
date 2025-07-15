import { MathImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MathPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Requirements for Functional Skills  qualifications in Mathematics`}
      src={MathImage}
      backRoute="/functional-skills-english-conditions-and-requirements"
    />
  );
};

export default MathPage;
