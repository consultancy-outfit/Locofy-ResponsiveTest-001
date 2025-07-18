import {  thelocationyouwanttoremove,} from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const TheLocationYouWanttoRemovePage = () => {
  return (
    <CommonPage
      pageTitle={`The location(s) you want to remove`}
      src={thelocationyouwanttoremove}
      backRoute="/remove-a-location"
    />
  );
};

export default TheLocationYouWanttoRemovePage;
