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
    link: "/attendance-proof-template-384478251",
    icon: img1DataAttendancetrackingSystemsImage,
    title: "384478251-Attendance-Proof-Template",
  },
  {
    key: "data-2",
    link: "/maytas-hub",
    icon: img2DataAttendancetrackingSystemsImage,
    title: "Maytas Hub",
  }
];

const DataAttendancetrackingSystemsPage = () => {
  return (
    <MultiPathPage
      arrayData={DataAttendancetrackingSystemsPageData}
      pageTitle="Data, Attendance & Tracking Systems"
       backRoute="/apprenticeship-documents"
    />
  );
};

export default DataAttendancetrackingSystemsPage;
