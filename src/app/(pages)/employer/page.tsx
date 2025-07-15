import { EmployerImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmployerPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Employer`}
      src={EmployerImage}
      backRoute="/apprenticeshipjourney-1"
    />
  );
};

export default EmployerPage;
