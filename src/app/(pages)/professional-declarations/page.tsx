import { ProfessionalDeclarationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ProfessionalDeclarationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Professional Declarations`}
      src={ProfessionalDeclarationsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default ProfessionalDeclarationsPage;
