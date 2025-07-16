import { Part4RegisteredManagerDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Part4RegisteredManagerDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`part 4 Registered Manager Details`}
      src={Part4RegisteredManagerDetailsImage}
      backRoute="/documents"
    />
  );
};

export default Part4RegisteredManagerDetailsPage;
