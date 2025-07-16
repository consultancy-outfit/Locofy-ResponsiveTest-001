import { Part2AimsAndObjectivesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Part2AimsAndObjectivesPage = () => {
  return (
    <CommonPage
      pageTitle={`part 2 Aims and Objectives`}
      src={Part2AimsAndObjectivesImage}
      backRoute="/documents"
    />
  );
};

export default Part2AimsAndObjectivesPage;
