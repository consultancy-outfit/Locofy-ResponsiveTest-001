import { BankruptcyAdministrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const BankruptcyAdministrationPage = () => {
  return (
    <CommonPage
      pageTitle={`Bankruptcy/Administration`}
      src={BankruptcyAdministrationImage}
      backRoute="/add-a-partner"
    />
  );
};

export default BankruptcyAdministrationPage;
