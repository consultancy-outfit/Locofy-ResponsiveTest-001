import { ManagingMultipleLocationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ManagingMultipleLocationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Managing Multiple Locations`}
      src={ManagingMultipleLocationsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default ManagingMultipleLocationsPage;
