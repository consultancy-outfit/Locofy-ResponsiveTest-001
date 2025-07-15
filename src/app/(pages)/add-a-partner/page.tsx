import { AddAPartnerImage } from "@/assets";

import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const AddAPartnerPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Add a Partner`}
      src={AddAPartnerImage}
      backRoute="/new-provider-application-breakdown"
    />
  );
};

export default AddAPartnerPage;
