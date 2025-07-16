import { WhereToSendYourApplicationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WhereToSendYourApplicationPage = () => {
  return (
    <CommonPage
      pageTitle={`Where to send your application:`}
      src={WhereToSendYourApplicationImage}
      backRoute="/application-to-cancel-one-regulated-activity"
    />
  );
};

export default WhereToSendYourApplicationPage;
