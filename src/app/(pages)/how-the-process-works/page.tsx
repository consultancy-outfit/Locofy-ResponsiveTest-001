"use client";
import { MultiPathPage } from "@/components";
import {
    HowToWorks1,
    HowToWorks2,
    HowToWorks3,
    HowToWorks4,
    HowToWorks5,
} from "@/assets";
import React from "react";

const HowTheProcessWorksPageData = [
    {
        key: "scope-1",
        link: "/step-by-step-cqc-application-process",
        icon: HowToWorks1,
        title: "Step-By-Step CQC Application Process",
    },
    {
        key: "scope-2",
        link: "/subject-access-request",
        icon: HowToWorks2,
        title: "Subject Access Request",
    },
    {
        key: "scope-5",
        link: "/manage-location",
        icon: HowToWorks3,
        title: "Manage Location",
    },
    {
        key: "scope-3",
        link: "/documents",
        icon: HowToWorks4,
        title: "Prepare Documents",
    },
    {
        key: "scope-4",
        link: "/scoping-paper-investigating-deaths-across-mental-health-acute-and-community-settings-reviewing-and-improving",
        icon: HowToWorks5,
        title: "Scoping paper  Investigating deaths across mental health",
    },

];

const HowTheProcessWorks = () => {
    return (
        <MultiPathPage
            arrayData={HowTheProcessWorksPageData}
            pageTitle="How the Process Works?"
            backRoute="/scope-of-registration"
        />
    );
};

export default HowTheProcessWorks;
