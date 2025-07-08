"use client";

import { IntroductionToWorkBasedProjectsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const IntroductionToWorkBasedProjectsPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /  Introduction to Work-Based Projects`}
      src={IntroductionToWorkBasedProjectsImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/muneeb_asif_consultancyoutfit_co_uk/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Forcalo%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2Fintroduction%2Dto%2Dwork%2Dbased%2Dprojects%2Epdf&correlation=f96aafa1%2De02a%2Dd000%2D3c6e%2D23270c63a5aa&Type=item&name=2db11a6e%2D4651%2D4eb9%2Da05a%2D56c23187f161&listItemId=381&listItemUniqueId=4205fbc4%2D9efc%2D4480%2Dacf1%2Deb033d0c1725"
    />
  );
};

export default IntroductionToWorkBasedProjectsPage;
