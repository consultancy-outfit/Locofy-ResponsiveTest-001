import { DbsDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DbsDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`DBS Details`}
      src={DbsDetailsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default DbsDetailsPage;
