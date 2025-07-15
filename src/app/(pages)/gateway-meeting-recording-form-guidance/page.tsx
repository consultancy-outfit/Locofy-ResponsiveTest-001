import { GatewayMeetingRecordingFormGuidanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GatewayMeetingRecordingFormGuidancePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Gateway Meeting  Recording Form Guidance`}
      src={GatewayMeetingRecordingFormGuidanceImage}
      backRoute="/gateway-completion-evaluation"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/saqib_hussain_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents%2FGeneric%2DGuidance%20%2D%20Gateway%20form%2Epdf&parent=%2Fpersonal%2Fsaqib%5Fhussain%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FApprenticeship%20Documents&ga=1"
    />
  );
};

export default GatewayMeetingRecordingFormGuidancePage;
