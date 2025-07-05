"use client";
import { MultiPathPage } from "@/components";
import {
  img1DataAttendancetrackingSystemsImage,
  img2DataAttendancetrackingSystemsImage
} from "@/assets";
import React from "react";

const DataAttendancetrackingSystemsPageData = [
  {
    key: "data-1",
    link: "/",
    icon: img1DataAttendancetrackingSystemsImage,
    title: "Data, Attendance & Tracking Systems Item 1",
  },
  {
    key: "data-2",
    link: "/",
    icon: img2DataAttendancetrackingSystemsImage,
    title: "Data, Attendance & Tracking Systems Item 2",
  }
];

const DataAttendancetrackingSystemsPage = () => {
  return (
    <MultiPathPage
      arrayData={DataAttendancetrackingSystemsPageData}
      pageTitle="Data, Attendance & Tracking Systems"
      backRoute="/court-hearing"
    />
  );
};

export default DataAttendancetrackingSystemsPage;
