import { TheServiceTypesProvidedAtThisLocationImag } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheServiceTypesProvidedAtThisLocationPage = () => {
  return (
    <CommonPage
      pageTitle={`The service types provided at this location  `}
      src={TheServiceTypesProvidedAtThisLocationImag}
      backRoute="/add-location"
    />
  );
};

export default TheServiceTypesProvidedAtThisLocationPage;
