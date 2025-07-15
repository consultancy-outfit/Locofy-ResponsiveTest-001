import { PostProgrammeApprenticeEvaluationFormImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const PostProgrammeApprenticeEvaluationFormPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Post Programme Apprentice Evaluation Form`}
      src={PostProgrammeApprenticeEvaluationFormImage}
      backRoute="/gateway-completion-evaluation"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/muneeb_asif_consultancyoutfit_co_uk/EUUsv1aXzaFIsqxdFAu7HuABrXix67NugQaKoNGyhGJydg?e=naCAvV"
    />
  );
};

export default PostProgrammeApprenticeEvaluationFormPage;
