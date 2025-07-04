import { PostProgrammeApprenticeEvaluationFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PostProgrammeApprenticeEvaluationFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Documents / Post Programme Apprentice Evaluation Form`}
      src={PostProgrammeApprenticeEvaluationFormImage}
      backRoute="/"
    />
  );
};

export default PostProgrammeApprenticeEvaluationFormPage;
