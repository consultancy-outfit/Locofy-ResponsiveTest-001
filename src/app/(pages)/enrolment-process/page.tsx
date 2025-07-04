import { EnrolmentProcessImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const EnrolmentProcessPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship Roles & Forms Guide / Enrolment Process`}
      src={EnrolmentProcessImage}
      backRoute="/apprenticeship-roles-forms-guide"
    />
  );
};

export default EnrolmentProcessPage;
