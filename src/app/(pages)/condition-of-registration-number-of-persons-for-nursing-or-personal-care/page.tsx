import { ConditionOfRegistrationNumberOfPersonsForNursingOrPersonalCareImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConditionOfRegistrationNumberOfPersonsForNursingOrPersonalCarePage = () => {
  return (
    <CommonPage
      pageTitle={`Condition of Registration (Number of Persons for Nursing or Personal Care)`}
      src={ConditionOfRegistrationNumberOfPersonsForNursingOrPersonalCareImage}
      backRoute="/add-location"
    />
  );
};

export default ConditionOfRegistrationNumberOfPersonsForNursingOrPersonalCarePage;
