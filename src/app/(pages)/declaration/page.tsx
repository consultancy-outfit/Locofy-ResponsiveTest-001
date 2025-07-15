import { DeclarationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Declaration`}
      src={DeclarationImage}
      backRoute="/add-a-partner"
    />
  );
};

export default DeclarationPage;
