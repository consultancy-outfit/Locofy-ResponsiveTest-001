import { DeclarationsByAllPartnersImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeclarationsByAllPartnersPage = () => {
  return (
    <CommonPage
      pageTitle={`Declarations by all partners`}
      src={DeclarationsByAllPartnersImage}
      backRoute="/add-a-partner"
    />
  );
};

export default DeclarationsByAllPartnersPage;
