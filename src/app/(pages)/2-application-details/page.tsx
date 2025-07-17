import { ApplicationDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Application Details`}
      src={ApplicationDetailsImage}
      backRoute="/add-location"
    />
  );
};

export default ApplicationDetailsPage;
