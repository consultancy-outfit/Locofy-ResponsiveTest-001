import { InvoiceAndFinancialContactDetailsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvoiceAndFinancialContactDetailsPage = () => {
  return (
    <CommonPage
      pageTitle={`4.1  Invoice and financial contact details `}
      src={InvoiceAndFinancialContactDetailsImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default InvoiceAndFinancialContactDetailsPage;
