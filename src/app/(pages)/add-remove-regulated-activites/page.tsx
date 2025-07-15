"use client";

import { MultiPathPage } from "@/components";
import { applicationToCancelOneRegulatedActivity, applicationToCarryOnaNewRegulatedActivity } from "@/assets";


const PaymentServicePageData = [
    {
        key: "e-1",
        link: "/",
        icon: applicationToCarryOnaNewRegulatedActivity,
        title: "Application TO Carry On A New Regulated Activity",
    },
    {
        key: "e-1",
        link: "/",
        icon: applicationToCancelOneRegulatedActivity,
        title: "Application To Cancel One Regulated Activity",
    },
];

const addRemoveRegulatedActivities = () => {
    return (
        <MultiPathPage
            backRoute="/"
            arrayData={PaymentServicePageData}
            pageTitle="Add / Remove Regulated activites"
        />
    );
};

export default addRemoveRegulatedActivities;
