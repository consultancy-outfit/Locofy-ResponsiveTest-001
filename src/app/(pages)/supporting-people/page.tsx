import { SupportingPeopleImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SupportingPeoplePage = () => {
  return (
    <CommonPage
      pageTitle={` Supporting People`}
      src={SupportingPeopleImage}
      backRoute="/who-needs-to-register"
    />
  );
};

export default SupportingPeoplePage;
