import { SupportingNotesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SupportingNotesPage = () => {
  return (
    <CommonPage
      pageTitle={`Supporting Notes`}
      src={SupportingNotesImage}
      backRoute="/add-a-partner"
    />
  );
};

export default SupportingNotesPage;
