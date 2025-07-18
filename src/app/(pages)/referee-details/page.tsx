import { RefereeDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefereeDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`Referee Details`}
      src={RefereeDetailsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default RefereeDetailsPage;
