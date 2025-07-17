import { ApplicationDeclarationImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDeclarationPage = () => {
  return (
    <CommonPage
      pageTitle={`Application declaration`}
      src={ApplicationDeclarationImg}
      backRoute="/add-location"
    />
  );
};

export default ApplicationDeclarationPage;
