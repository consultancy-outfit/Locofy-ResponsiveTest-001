import { RefusalsOrCancellationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefusalsOrCancellationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Refusals or Cancellations`}
      src={RefusalsOrCancellationsImage}
      backRoute="/application-for-registration-as-a-manager-of-regulated-activityactivities"
    />
  );
};

export default RefusalsOrCancellationsPage;
