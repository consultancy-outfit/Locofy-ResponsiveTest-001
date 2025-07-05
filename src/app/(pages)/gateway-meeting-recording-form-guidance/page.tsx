import { GatewayMeetingRecordingFormGuidanceImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const GatewayMeetingRecordingFormGuidancePage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey / Apprenticeship Documents / Gateway Meeting  Recording Form Guidance`}
      src={GatewayMeetingRecordingFormGuidanceImage}
      backRoute="/gateway-completion-evaluation"
    />
  );
};

export default GatewayMeetingRecordingFormGuidancePage;
