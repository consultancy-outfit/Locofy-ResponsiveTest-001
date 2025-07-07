import { MaytasHubImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MaytasHubPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Maytas Hub`}
      src={MaytasHubImage}
      backRoute="/data-attendance-tracking-systems"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/muneeb_asif_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FMaytas%20Hub%2Epdf&parent=%2Fpersonal%2Fmuneeb%5Fasif%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
  );
};

export default MaytasHubPage;
