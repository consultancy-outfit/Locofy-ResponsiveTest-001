"use client";
import { MultiPathPage } from "@/components";
import {
  img1NewProviderApplicationBreakdownImage,
  img2NewProviderApplicationBreakdownImage
} from "@/assets";
import React from "react";

const NewProviderApplicationBreakdownPageData = [
  {
    key: "new-1",
    link: "/add-a-partner",
    icon: img1NewProviderApplicationBreakdownImage,
    title: "Add A Partner",
  },
  {
    key: "new-2",
    link: "/sc1-application-for-registration-as-a-new-provider-of-regulated-activities",
    icon: img2NewProviderApplicationBreakdownImage,
    title: "New Provider Of Regulated Activities",
  }
];

const NewProviderApplicationBreakdownPage = () => {
  return (
    <MultiPathPage
      arrayData={NewProviderApplicationBreakdownPageData}
      pageTitle="New Provider Application BreakDown"
      backRoute="/who-needs-to-register"
    />
  );
};

export default NewProviderApplicationBreakdownPage;
