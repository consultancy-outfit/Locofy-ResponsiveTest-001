import { Applicationdeclaration } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDeclarionRemoveLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`Application declaration`}
      src={Applicationdeclaration}
      backRoute="/remove-a-location"
    />
  );
};

export default ApplicationDeclarionRemoveLocationPage;
