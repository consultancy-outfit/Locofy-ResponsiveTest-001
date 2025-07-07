"use client";

import { CompletedApprenticeProgressReviewExemplarWordDocImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const CompletedApprenticeProgressReviewExemplarWordDocPage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / completed-apprentice-progress-review-exemplar-word-doc`}
      src={CompletedApprenticeProgressReviewExemplarWordDocImage}
      backRoute="/progress-reviews-tracking"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/tayyaba_consultancyoutfit_co_uk/EY5ym0atVVpOhNXz8LoEcSMBtjIclbOWIq9NW2Q54YuWpw?wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1751630274344&web=1"
    />
  );
};

export default CompletedApprenticeProgressReviewExemplarWordDocPage;
