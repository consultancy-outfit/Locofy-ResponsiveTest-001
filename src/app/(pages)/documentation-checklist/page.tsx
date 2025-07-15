import { DocumentationChecklistImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const DocumentationChecklistPage = () => {
  return (
    <CommonPage
      pageTitle={`Documentation Checklist`}
      src={DocumentationChecklistImage}
      backRoute="/add-a-partner"
    />
  );
};

export default DocumentationChecklistPage;
