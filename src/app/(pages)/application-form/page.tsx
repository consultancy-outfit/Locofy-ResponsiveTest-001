import { ApplicationFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship Roles & Forms Guide / Application form`}
      src={ApplicationFormImage}
      backRoute="/apprenticeship-roles-forms-guide"
    />
  );
};

export default ApplicationFormPage;
