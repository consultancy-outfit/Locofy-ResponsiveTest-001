import { EmploymentHistoryImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EmploymentHistoryPage = () => {
  return (
    <CommonPage
      pageTitle={`Employment History`}
      src={EmploymentHistoryImage}
      backRoute="/add-a-partner"
    />
  );
};

export default EmploymentHistoryPage;
