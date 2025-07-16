import React from "react";
import { CommonPage } from "@/components";
import { section6NewLocationsWhereYouWantPage } from "@/assets";

const Section6NewLocationsWhereYouWant = () => {
    return (
        <CommonPage
            src={section6NewLocationsWhereYouWantPage}
            pageTitle="New locations where you want to carry on the new regulated activity"
            backRoute="/sc1-application-for-registration-as-a-new-provider-of-regulated-activities"
        />
    );
};

export default Section6NewLocationsWhereYouWant;
