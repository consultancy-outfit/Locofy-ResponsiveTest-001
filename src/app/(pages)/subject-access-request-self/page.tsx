import { SubjectAccessRequestSelfImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SubjectAccessRequestSelfPage = () => {
  return (
    <CommonPage
      pageTitle={`Subject Access Request ( Self)`}
      src={SubjectAccessRequestSelfImage}
      backRoute="/subject-access-request"
    />
  );
};

export default SubjectAccessRequestSelfPage;
