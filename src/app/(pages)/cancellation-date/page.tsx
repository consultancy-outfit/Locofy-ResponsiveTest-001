import { CancellationDateImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const CancellationDatePage = () => {
  return (
    <CommonPage
      pageTitle={`Cancellation date`}
      src={CancellationDateImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default CancellationDatePage;
