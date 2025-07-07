"use client";

import { WeeklyJournalExampleImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const WeeklyJournalExamplePage = () => {
  return (
    <AmendmentComparison
      pageTitle={`Apprenticeship Documents  / Apprenticeship Documents /  Weekly journal example`}
      src={WeeklyJournalExampleImage}
      backRoute="/training-delivery-off-the-job-learning"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/muneeb_asif_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FWeekly%20journal%20example%2Epdf&parent=%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default WeeklyJournalExamplePage;
