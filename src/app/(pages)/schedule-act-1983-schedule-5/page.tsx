"use client";

import { ScheduleAct1983Schedule5Image } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import React from "react";

const ScheduleAct1983Schedule5Page = () => {
  return (
    <AmendmentComparison
      pageTitle={`Mental Health / Act 1983 / SCHEDULE / Schedule 5`}
      src={ScheduleAct1983Schedule5Image}
      backRoute="/schedule-act-1983"
     amendmentButtonRoute="/schedule-act-1983-schedule-5-amendment-comparison"
    />
  );
};

export default ScheduleAct1983Schedule5Page;
