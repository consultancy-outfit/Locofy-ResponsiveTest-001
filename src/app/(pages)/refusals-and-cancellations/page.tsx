import { RefusalsAndCancellationsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RefusalsAndCancellationsPage = () => {
  return (
    <CommonPage
      pageTitle={`Refusals and Cancellations`}
      src={RefusalsAndCancellationsImage}
      backRoute="/add-a-partner"
    />
  );
};

export default RefusalsAndCancellationsPage;
