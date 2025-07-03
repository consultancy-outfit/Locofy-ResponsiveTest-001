import { PeopleResourcesKnowledgeManagementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PeopleResourcesKnowledgeManagementPage = () => {
  return (
    <CommonPage
      pageTitle="People & Resources/Knowledge Management"
      src={PeopleResourcesKnowledgeManagementImage}
      backRoute="/"
    />
  );
};

export default PeopleResourcesKnowledgeManagementPage;
