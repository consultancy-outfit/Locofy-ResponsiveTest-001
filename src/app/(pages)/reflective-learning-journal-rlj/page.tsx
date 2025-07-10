"use client";

import { ReflectiveLearningJournalRljImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ReflectiveLearningJournalRljPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents /  Reflective Learning Journal (RLJ)`}
      src={ReflectiveLearningJournalRljImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/farikha_almas_consultancyoutfit_co_uk/_layouts/15/AccessDenied.aspx?Source=https%3A%2F%2Forcalo%2Dmy%2Esharepoint%2Ecom%2Fmy%3Fid%3D%252Fpersonal%252Ffarikha%255Falmas%255Fconsultancyoutfit%255Fco%255Fuk%252FDocuments%252FMicrosoft%2520Teams%2520Chat%2520Files%252FReflective%2520Learning%2520Journal%25202017%252Epdf%26parent%3D%252Fpersonal%252Ffarikha%255Falmas%255Fconsultancyoutfit%255Fco%255Fuk%252FDocuments%252FMicrosoft%2520Teams%2520Chat%2520Files%26ga%3D1&correlation=b15eb0a1%2Dd09b%2Dd000%2D3c6e%2D26b35aa00244&Type=item&name=8da3be72%2D620d%2D428d%2D8cae%2D7eecae76760a&listItemId=2259&listItemUniqueId=ee2d284d%2Dbc63%2D487c%2Da5df%2D8057662c2328"
    />
  );
};

export default ReflectiveLearningJournalRljPage;
