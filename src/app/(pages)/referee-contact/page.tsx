import { RefereeContactImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefereeContactPage = () => {
  return (
    <CommonPage
      pageTitle={`Referee Contact`}
      src={RefereeContactImage}
      backRoute="/add-a-partner"
    />
  );
};

export default RefereeContactPage;
