import { NameAndContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NameAndContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Name and Contact Details`}
      src={NameAndContactDetailsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default NameAndContactDetailsPage;
