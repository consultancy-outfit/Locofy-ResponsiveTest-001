import { ConditionOfRegistrationAboutNotProvidingNursingCareAtThisLocationScreen } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ConditionOfRegistrationAboutNotProvidingNursingCareAtThisLocationSection = () => {
  return (
    <CommonPage
      pageTitle={`Condition of registration about not providing nursing care at this location`}
      src={ConditionOfRegistrationAboutNotProvidingNursingCareAtThisLocationScreen}
      backRoute="/application-to-carry-on-new-regulated-activity"
    />
  );
};

export default ConditionOfRegistrationAboutNotProvidingNursingCareAtThisLocationSection;
