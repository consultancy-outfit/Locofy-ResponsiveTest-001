"use client";

import { SkillScanDiagramImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const SkillScanDiagramPage = () => {
  return (
    <CommonPage
      pageTitle={`Apprenticeship Journey  / Apprenticeship Documents  / Skill Scan / Diagrams`}
      src={SkillScanDiagramImage}
      backRoute="/skill-scan"
    />
  );
};

export default SkillScanDiagramPage;
