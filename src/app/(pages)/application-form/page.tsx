import { ApplicationFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ApplicationFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeships / Apprenticeship Roles & Forms Guide / Application form`}
      src={ApplicationFormImage}
      backRoute="/apprenticeship-roles-and-form-guide"
    />
  );
};

export default ApplicationFormPage;
