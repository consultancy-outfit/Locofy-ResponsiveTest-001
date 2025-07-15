"use client";
import React from "react";
import MultiImagesNoBtn from "@/components/multi-images-no-btn";
import { exemptionFromContingencyMechanism1} from "@/assets";

const exemptionFromContingencyMechanism = () => {
    const handleCheckboxChange = (selectedValue: string, page: string) => {
        console.log(`Selected: ${selectedValue} on page: ${page}`);
    };
    return (
        <MultiImagesNoBtn
            backRoute="/payment-initiation-ais-confirmation-availability-funds"
            pageTitle="Exemption from the contingency mechanism"
            images={[
                { src: exemptionFromContingencyMechanism1, route: "/pisp_spi", alt: "Image" },
            ]}
            onChange={handleCheckboxChange}
        />

    );
};
 
export default exemptionFromContingencyMechanism;
