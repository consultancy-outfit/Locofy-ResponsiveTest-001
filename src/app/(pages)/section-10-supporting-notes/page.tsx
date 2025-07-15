import { Section10SupportingNotesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Section10SupportingNotesPage = () => {
  return (
    <CommonPage
      pageTitle={`Section 10: Supporting notes`}
      src={Section10SupportingNotesImage}
      backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
    />
  );
};

export default Section10SupportingNotesPage;
